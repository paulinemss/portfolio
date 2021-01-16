import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = ({ location }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        Pauline Massé
      </Brand>
      <NavbarLinks location={location} desktop />
    </Wrapper>
  );
};

export default Navbar;
