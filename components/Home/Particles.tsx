import React from 'react';
import Particles from 'react-particles-js';

export default function () {
  return (
    <div className="max-w-full">
      <Particles
        height="350px"
        style={{
          height: '350px',
          left: '0',
          position: 'absolute',
          zIndex: ' -999',
        }}
        params={{
          particles: {
            number: {
              value: 100,
            },
            color: {
              value: '#000',
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
            size: {
              value: 2,
              random: true,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}
