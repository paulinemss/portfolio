import styled from 'styled-components';

export const Kata = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: -40px;
`;

export const KataDetails = styled.div`
  width: 35%;
  background-color: #fafafa;
  flex-grow: 1;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  padding: 1rem;
  border-radius: 3px;
  margin-left: 40px;
  height: ${props => `${props.maxHeight}px`};
  min-height: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2rem;
  position: relative;
  a {
    color: rgb(63, 129, 255);
    text-decoration: underline;
  }
`;

export const LoadMore = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  padding-left: 1rem;
  height: 150px;
  background: linear-gradient(transparent, #fff 60%);
  bottom: 0;
  a {
    display: flex;
    align-items: center;
    color: #7c4dff;
    text-decoration: none;
  }
  img {
    width: 25px;
    height: 25px;
    margin-bottom: 0;
  }
  p {
    margin: 0 0 0 0.6rem;
  }
`;

export const KataSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const KataSolution = styled.div`
  width: 55%;
  flex-basis: 400px;
  flex-grow: 1;
  margin-left: 40px;
  padding: 1rem;
  font-family: 'monospace' !important;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  border-radius: 3px;
  margin-bottom: 2rem;
  background-color: #fafafa;
  code {
    word-break: break-word;
    white-space: break-spaces !important;
  }
`;
