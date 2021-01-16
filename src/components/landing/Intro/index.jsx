import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import mainPauline from 'assets/illustrations/mainPauline.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header location="/home" />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi there, I'm Pauline.</h1>
          <h4>Passionate about diverse and inclusive technology, I'm available for hire.</h4>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
        <Thumbnail>
          <img src={mainPauline} alt="Pauline Massé, frontend developer" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
