import React from 'react';
import { Layout, SEO, Container } from 'components/common';
import { Header } from 'components/theme';
import { Wrapper } from './styles';
import data from '../../assets/data/codewars.json';

export default () => (
  <Layout>
    <SEO title="Algorithm challenges" location="/katas" />
    <Header />
    <Container>
      <div>
        <h1>Katas</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Container>
  </Layout>
);
