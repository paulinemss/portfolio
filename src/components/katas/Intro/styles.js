import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Overlay = styled.div`
  background-image: url(${overlayIllustration});
  position: absolute;
  top: 0;
  right: 0;
  height: 1000px;
  width: 100%;
  background-size: contain;
  background-position: right top;
  z-index: -1;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: rgb(112, 112, 112);
    a {
      color: black;
      font-weight: 500;
    }
  }
`;
