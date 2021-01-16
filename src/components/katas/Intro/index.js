import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Overlay } from './styles';

export const Intro = () => (
  <Wrapper>
    <Overlay />
    <Header location="/katas" />
    <IntroWrapper as={Container}>
      <h1>Algorithm Challenges</h1>
      <p>
        For the past year, I have been training myself on programming challenges, known as katas, on Codewars. You can
        find below my solutions. All katas have been solved with JavaScript. I've exported this data from Codewars'
        platform using my{' '}
        <a href="https://github.com/paulinemss/kata-crawler" target="_blank" rel="noopener noreferrer">
          Kata Crawler
        </a>
        .
      </p>
    </IntroWrapper>
  </Wrapper>
);
