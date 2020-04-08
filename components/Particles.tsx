import React, { useContext } from 'react';
import Particles from 'react-particles-js';
import styled, { ThemeContext } from 'styled-components';

export default function () {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <StyledParticleContainer>
      <Particles
        height="350px"
        params={{
          particles: {
            number: {
              value: 100,
            },
            color: {
              value: themeContext.text === 'white' ? '#fff' : '#000',
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
    </StyledParticleContainer>
  );
}

const StyledParticleContainer = styled.div`
  width: 100%;

  canvas {
    height: 350px;
    left: 0;
    position: absolute;
    z-index: -999;
  }
`;
