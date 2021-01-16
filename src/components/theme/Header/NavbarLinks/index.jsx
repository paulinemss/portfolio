import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, location }) => {
  const { theme } = useContext(ThemeContext);
  const isHomepage = location === '/home';

  if (isHomepage) {
    return (
      <Wrapper desktop={desktop} theme={theme}>
        <Link href="/katas">Katas</Link>
        <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#contact">Contact</AnchorLink>
      </Wrapper>
    );
  }

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="/katas">Katas</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#contact">Contact</Link>
    </Wrapper>
  );
};

export default NavbarLinks;
