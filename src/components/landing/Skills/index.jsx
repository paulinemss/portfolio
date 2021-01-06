import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/morePauline.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            After 5 years working as project manager in the European tech industry, I became a developer in March 2020.
            Passionate about UX, intuitive designs, diversity in tech, and accessibility, I'm looking for a new
            challenge.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact
          </Button>
          <Button className="btn-cv">
            <a href="https://www.linkedin.com/in/paulinemasse/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
