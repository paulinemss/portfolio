import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #3f81ff;
  font-family: 'Roboto';

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #7A9299;
	`}
`;

export const OutlinedButton = styled(Button)`
  margin-left: 20px;
  background: none;
  border: 1px solid #adcfd8;
  color: #99b7bf;
  align-self: ${props => (props.isSmall ? 'center' : 'stretch')};

  a {
    font-family: 'Roboto';
    color: #99b7bf;
  }
`;
