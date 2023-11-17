particlesJS('particles-js', {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#e70052'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 4,
        random: true
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'false',
        random: true,
        straight: false,
        out_mode: 'out'
      },
      line_linked: {
        enable: true,
        distance: 145,
        color: '#ffffff',
        opacity: 0.8,
        width: 1.3
      },
      shape: {
        type: 'triangle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        grab: {
            distance: 125
          },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: false, // Disable retina detection
    fps_limit: 240 // Limit FPS to 60
});
