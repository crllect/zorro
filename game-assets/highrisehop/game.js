// initialize kaboom context
    kaboom({
        width: 640,
        height: 480,
        stretch: false,
        letterbox: true,
        background: [126,175,205],
    });
    
    loadSprite("splash_text", "assets/gfx/splash_text.png");
    loadSprite("title_text_1", "assets/gfx/title_text_1.png");
    loadSprite("title_text_2", "assets/gfx/title_text_2.png");
    loadSprite("logo", "assets/gfx/logo.png");
    loadSprite("game_over", "assets/gfx/game_over.png");
    loadSprite("floor", "assets/gfx/floor_0.png");
    loadSprite("ground", "assets/gfx/ground.png");
    loadSprite("score_sign", "assets/gfx/score_sign.png");
    loadSprite("jump_meter_inner", "assets/gfx/jump_meter_inner.png");
    loadSprite("jump_meter_outer", "assets/gfx/jump_meter_outer.png");
    loadSprite("floor", "assets/gfx/floor_0.png");
    loadSpriteAtlas("assets/gfx/player_atlas.png", {
    "player": {
        x: 0,
        y: 0,
        width: 64,
        height: 32,
        sliceX: 2,
        anims: {
            idle: { from: 0, to: 0 },
            charge: { from: 1, to: 1 },
            },
        },
    });
    loadSpriteAtlas("assets/gfx/enemy_atlas.png", {
    "enemy": {
        x: 0,
        y: 0,
        width: 176,
        height: 51,
        sliceX: 8,
        anims: {
            idle_right: { from: 0, to: 3, loop: true,},
            idle_left: { from: 4, to: 7, loop: true,},
            },
        },
    });

    
    loadFont("numbers", "assets/gfx/numbers.png", 38, 58, 
    {
        chars: "0123456789",  
    })

    loadSound("game_theme", "assets/sfx/DAWLAT AL ISLAM QAMLAT.ogg");
    loadSound("menu_theme", "assets/sfx/DAWLAT AL ISLAM QAMLAT.ogg");
    loadSound("charge", "assets/sfx/charge.wav");
    loadSound("death", "assets/sfx/death.wav");
    loadSound("jump", "assets/sfx/jump.wav");
    
    function spawnFloor(y)
    {
        add([
            "floor",
            sprite("floor"),
            pos(320 - 450/2, y),
            z(1),
            {
                start: false,
                passed: false,
            }
        ]);
    }
    function spawnGround(y)
    {
        add([
            "floor",
            sprite("ground"),
            pos(0, y),
            z(2),
            {
                start: true,
                passed: true,
            }
        ]);
    }
    function spawnEnemy(y)
    {
        const enemy = add([
            "enemy",
            sprite("enemy"),
            pos(95 + rand(640 - 95 - 95 - 22), y),
            z(2),
            {
                dir: 1 - randi(1)*2,
                speed: 120,
            },
        ]);
        if (dir == -1)
        {
            enemy.play("idle_left");
        }
        else
        {
            enemy.play("idle_right");
        }
    }
    function checkCollisions(a_x, a_y, a_width, a_height, b_x, b_y, b_width, b_height)
    {
        return (a_x + a_width > b_x) && (a_x < b_x + b_width) && (a_y + a_height > b_y) && (a_y < b_y + b_height);
    }
    scene("splash", () => {
        const splashText = add([
            sprite("splash_text"),  
            pos(320 - 59, 240 - 11),
        ])
        //play("jump");
        let timer = 1.57;
        let playedSplashFx = false;
        action(() => {
            timer -= dt();
            splashText.pos.y = wave(240 - 11 - 5, 240 - 11 + 5, time()*4);
            if (timer < 0)
            {
                go("menu");
            }
        });

    });
    scene("menu", () => {
        const music = play("DAWLAT AL ISLAM QAMLAT.ogg", {
        volume: 0.5,
        loop: true
        });
        const logo = add([
            sprite("logo"),  
            pos(320 - 132, 100),
        ])
        const textL = add([
            sprite("title_text_1"),  
            pos(0,0),
        ])
        const textR = add([
            sprite("title_text_2"),  
            pos(0,0),
        ])
        action(() => {
            textL.pos.y = wave(-3, 3, time()*3);
            textR.pos.y = wave(-3, 3, time()*3 + 1);
        });
        keyPress("space", () => {
            go("game");
            music.pause();
        });
    });
    scene("game", () => {
        const music = play("DAWLAT AL ISLAM QAMLAT.ogg", {
        volume: 0.5,
        loop: true
        });

        spawnFloor(-75);
        spawnFloor(0 - 3);
        spawnFloor(75 - 6);
        spawnFloor(150 - 9);
        spawnFloor(225 - 12);
        spawnFloor(300 - 15);
        spawnGround(300 - 15);
        spawnFloor(375 - 18);
        spawnFloor(450 - 21);
        spawnFloor(525 - 24);

        let score = -4;
        let dead = false;
        let chargeSoundPlayed = false;
        let endScreenCreated = false;
        const scoreSign = add([
            sprite("score_sign"),  // renders as a sprite
            pos(5, 9),
            z(6),
        ])
        const scoreLabel = add([
            pos(32, 46),    // position in world
            text(score,
            {
                size: 58,
                font: "numbers",
            }),
            z(7),
        ])

        const jumpMeterInside = add([
            sprite("jump_meter_inner"),  // renders as a sprite
            pos(-64, -64),
            scale(1,1),
            origin("bot"),
            z(5),
        ])

        const jumpMeterOutside = add([
            sprite("jump_meter_outer"),  // renders as a sprite
            pos(-64, -64),
            origin("bot"),
            z(4),
        ])


        const player = add([
            sprite("player"),  // renders as a sprite
            pos(320 - 16, 240 - 16),    // position in world
            {
                dir: 1,
                dead: false,
                speed: 120,
                jumpForce: 300,
                maxJumpForce: 700,
                yVel: 0,
                grounded: false
            },
            z(3),
        ]);  
        keyPress("space", () => {
            if (dead)
            {
                go("game");
            }
        });
        keyDown("space", () => {
            if (player.grounded && !dead)
            {
                player.speed = 90;
                jumpMeterOutside.pos.x = player.pos.x + 48;
                jumpMeterOutside.pos.y = player.pos.y + 32;

                jumpMeterInside.pos.x = jumpMeterOutside.pos.x;
                jumpMeterInside.pos.y = jumpMeterOutside.pos.y - 2;

                jumpMeterInside.scale.y = (player.jumpForce - 300)/(player.maxJumpForce - 300);

                player.jumpForce += 5*60*dt();
                if (player.jumpForce > player.maxJumpForce)
                {
                    player.jumpForce = player.maxJumpForce;
                }
                player.play("charge");
                if (!chargeSoundPlayed)
                {
                    play("charge");
                    chargeSoundPlayed = true;
                }

            }
        });
        keyRelease("space", () => {
            if (player.grounded && !dead)
            {
                player.speed = 120;
                jumpMeterInside.pos.x = -64;
                jumpMeterInside.pos.y = -64;
                jumpMeterOutside.pos.x = -64;
                jumpMeterOutside.pos.y = -64;
                //shake(120)
                player.yVel = -player.jumpForce;
                player.jumpForce = 300;
                player.grounded = false;
                player.play("idle");
                play("jump");
                chargeSoundPlayed = false;
            }
        });
        action("enemy", (e) => {
            if (!dead)
            {
	            e.move(e.dir*e.speed, 50);
                if (e.pos.x + 22 > 640 - 95)
                {
                    e.dir = -1;
                    e.play("idle_left");
                }
                else if (e.pos.x < 95)
                {
                    e.dir = 1;
                    e.play("idle_right");
                }
	            // remove from scene once offscreen
	            if (e.pos.y > 525 - 24) {
		            destroy(e);
	            }
                if (checkCollisions(e.pos.x, e.pos.y, 22, 51, player.pos.x, player.pos.y, 32, 32))
                {
                    play("death");
                    dead = true;
                }
            }
            else
            {
                e.stop();
            }
        });
        action("floor", (f) => {
            if (!dead)
            {
	        // move down
	        f.move(0, 50);
	        // check if frog passed floor
	        if (f.pos.y > player.pos.y + 32 && !f.passed) {
		        score += 1;
                scoreLabel.text = score;
		        f.passed = true;
                if (score > 9)
                {
                    scoreLabel.pos.x = 12;
                }
	        }
	        // remove from scene once offscreen
	        if (f.pos.y > 525 - 24) {
		        destroy(f);
                if (!f.start)
                {
                    spawnFloor(-74);
                }
                if ((randi(2) == 0) && !f.start)
                {
                    spawnEnemy(-59);
                }
	        }
            if (checkCollisions(f.pos.x, f.pos.y, 450, 1, player.pos.x, player.pos.y + 24, 32, 8))
            {
                if (player.yVel >= 0)
                {
                    player.yVel = 0;
                    player.pos.y = f.pos.y - 32;
                    player.grounded = true;
                }
            }
        }
        });
        action(() => {
            if (!dead)
            {
            if (!player.grounded)
            {
                player.yVel += 1200 * dt();
            }
            //if (player.pos.y + 32 < 480)
            //{
                //player.yVel += 1200 * dt();
            //}
            //if (player.yVel > 0)
            //{
                //player.yVel = 0;
                //player.pos.y = 480 - 32;
                //player.grounded = true;
            //}
            player.move(player.dir*player.speed, player.yVel + 50);
            if (player.pos.x + 32 > 640 - 95)
            {
                player.dir = -1;
            }
            else if (player.pos.x < 95)
            {
                player.dir = 1;
            }
            if (player.pos.y > 480)
            {
                play("death");
                dead = true;
            }
        }
        else
        {
            if (!endScreenCreated)
            {
                music.pause();
                add([
                    sprite("game_over"),
                    pos(0,0),
                    z(5)
                ]);
                endScreenCreated = true;
            }
        }
        });
    });
    go("splash")