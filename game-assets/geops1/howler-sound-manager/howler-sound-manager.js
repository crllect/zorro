var gdjs;
(function(gdjs2) {
  class HowlerSound extends Howl {
    constructor(o) {
      super(o);
      this._paused = false;
      this._stopped = true;
      this._canBeDestroyed = false;
      this._rate = o.rate || 1;
      const that = this;
      this.on("end", function() {
        if (!that.loop()) {
          that._canBeDestroyed = true;
          that._paused = false;
          that._stopped = true;
        }
      });
      this.on("playerror", function(id, error) {
        console.error("Can't play a sound, considering it as stopped. Error is:", error);
        that._paused = false;
        that._stopped = true;
      });
      this.on("play", function() {
        that._paused = false;
        that._stopped = false;
      });
      this.on("pause", function() {
        that._paused = true;
        that._stopped = false;
      });
    }
    stop() {
      this._paused = false;
      this._stopped = true;
      return super.stop();
    }
    play() {
      this._paused = false;
      this._stopped = false;
      return super.play();
    }
    pause() {
      this._paused = true;
      this._stopped = false;
      return super.pause();
    }
    paused() {
      return this._paused;
    }
    stopped() {
      return this._stopped;
    }
    canBeDestroyed() {
      return this._canBeDestroyed;
    }
    getRate() {
      return this._rate;
    }
    setRate(rate) {
      this._rate = HowlerSoundManager.clampRate(rate);
      this.rate(this._rate);
    }
  }
  gdjs2.HowlerSound = HowlerSound;
  class HowlerSoundManager {
    constructor(resources) {
      this._availableResources = {};
      this._globalVolume = 100;
      this._sounds = {};
      this._musics = {};
      this._freeSounds = [];
      this._freeMusics = [];
      this._pausedSounds = [];
      this._paused = false;
      this._resources = resources;
      const that = this;
      this._checkForPause = function() {
        if (that._paused) {
          this.pause();
          that._pausedSounds.push(this);
        }
      };
      document.addEventListener("deviceready", function() {
        document.addEventListener("pause", function() {
          const soundList = that._freeSounds.concat(that._freeMusics);
          for (let key in that._sounds) {
            if (that._sounds.hasOwnProperty(key)) {
              soundList.push(that._sounds[key]);
            }
          }
          for (let key in that._musics) {
            if (that._musics.hasOwnProperty(key)) {
              soundList.push(that._musics[key]);
            }
          }
          for (let i = 0; i < soundList.length; i++) {
            const sound = soundList[i];
            if (!sound.paused() && !sound.stopped()) {
              sound.pause();
              that._pausedSounds.push(sound);
            }
          }
          that._paused = true;
        }, false);
        document.addEventListener("resume", function() {
          for (let i = 0; i < that._pausedSounds.length; i++) {
            const sound = that._pausedSounds[i];
            if (!sound.stopped()) {
              sound.play();
            }
          }
          that._pausedSounds.length = 0;
          that._paused = false;
        }, false);
      });
    }
    setResources(resources) {
      this._resources = resources;
    }
    static clampRate(rate) {
      if (rate > 4) {
        return 4;
      }
      if (rate < 0.5) {
        return 0.5;
      }
      return rate;
    }
    _getFileFromSoundName(soundName) {
      if (this._availableResources.hasOwnProperty(soundName) && this._availableResources[soundName].file) {
        return this._availableResources[soundName].file;
      }
      return soundName;
    }
    _storeSoundInArray(arr, sound) {
      for (let i = 0, len = arr.length; i < len; ++i) {
        if (arr[i] !== null && arr[i].canBeDestroyed()) {
          arr[i] = sound;
          return sound;
        }
      }
      arr.push(sound);
      return sound;
    }
    playSound(soundName, loop, volume, pitch) {
      const soundFile = this._getFileFromSoundName(soundName);
      const sound = new gdjs2.HowlerSound({
        src: [soundFile],
        loop,
        volume: volume / 100,
        rate: HowlerSoundManager.clampRate(pitch)
      });
      this._storeSoundInArray(this._freeSounds, sound).play();
      sound.on("play", this._checkForPause);
    }
    playSoundOnChannel(soundName, channel, loop, volume, pitch) {
      const oldSound = this._sounds[channel];
      if (oldSound) {
        oldSound.unload();
      }
      const soundFile = this._getFileFromSoundName(soundName);
      const sound = new gdjs2.HowlerSound({
        src: [soundFile],
        loop,
        volume: volume / 100,
        rate: HowlerSoundManager.clampRate(pitch)
      });
      sound.play();
      this._sounds[channel] = sound;
      sound.on("play", this._checkForPause);
    }
    getSoundOnChannel(channel) {
      return this._sounds[channel];
    }
    playMusic(soundName, loop, volume, pitch) {
      const soundFile = this._getFileFromSoundName(soundName);
      const sound = new gdjs2.HowlerSound({
        src: [soundFile],
        loop,
        html5: true,
        volume: volume / 100,
        rate: HowlerSoundManager.clampRate(pitch)
      });
      this._storeSoundInArray(this._freeMusics, sound).play();
      sound.on("play", this._checkForPause);
    }
    playMusicOnChannel(soundName, channel, loop, volume, pitch) {
      const oldMusic = this._musics[channel];
      if (oldMusic) {
        oldMusic.unload();
      }
      const soundFile = this._getFileFromSoundName(soundName);
      const music = new gdjs2.HowlerSound({
        src: [soundFile],
        loop,
        html5: true,
        volume: volume / 100,
        rate: HowlerSoundManager.clampRate(pitch)
      });
      music.play();
      this._musics[channel] = music;
      music.on("play", this._checkForPause);
    }
    getMusicOnChannel(channel) {
      return this._musics[channel];
    }
    setGlobalVolume(volume) {
      this._globalVolume = volume;
      if (this._globalVolume > 100) {
        this._globalVolume = 100;
      }
      if (this._globalVolume < 0) {
        this._globalVolume = 0;
      }
      Howler.volume(this._globalVolume / 100);
    }
    getGlobalVolume() {
      return this._globalVolume;
    }
    clearAll() {
      for (let i = 0; i < this._freeSounds.length; ++i) {
        if (this._freeSounds[i]) {
          this._freeSounds[i].unload();
        }
      }
      for (let i = 0; i < this._freeMusics.length; ++i) {
        if (this._freeMusics[i]) {
          this._freeMusics[i].unload();
        }
      }
      this._freeSounds.length = 0;
      this._freeMusics.length = 0;
      for (let p in this._sounds) {
        if (this._sounds.hasOwnProperty(p) && this._sounds[p]) {
          this._sounds[p].unload();
          delete this._sounds[p];
        }
      }
      for (let p in this._musics) {
        if (this._musics.hasOwnProperty(p) && this._musics[p]) {
          this._musics[p].unload();
          delete this._musics[p];
        }
      }
      this._pausedSounds.length = 0;
    }
    preloadAudio(onProgress, onComplete, resources) {
      resources = resources || this._resources;
      const files = {};
      for (let i = 0, len = resources.length; i < len; ++i) {
        const res = resources[i];
        if (res.file && res.kind === "audio") {
          if (!!this._availableResources[res.name]) {
            continue;
          }
          this._availableResources[res.name] = res;
          files[res.file] = (files[res.file] || []).concat(res);
        }
      }
      const totalCount = Object.keys(files).length;
      if (totalCount === 0) {
        return onComplete(totalCount);
      }
      let loadedCount = 0;
      const that = this;
      function onLoad() {
        loadedCount++;
        if (loadedCount === totalCount) {
          return onComplete(totalCount);
        }
        onProgress(loadedCount, totalCount);
      }
      for (const file in files) {
        if (files.hasOwnProperty(file)) {
          const httpRequest = new XMLHttpRequest();
          httpRequest.addEventListener("load", onLoad);
          httpRequest.addEventListener("error", onLoad);
          httpRequest.addEventListener("abort", onLoad);
          httpRequest.open("GET", file);
          httpRequest.send();
        }
      }
    }
  }
  gdjs2.HowlerSoundManager = HowlerSoundManager;
  gdjs2.SoundManager = HowlerSoundManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=howler-sound-manager.js.map
