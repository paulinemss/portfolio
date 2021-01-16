import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Challenges } from 'components/katas';
import './style.css';

export default () => (
  <Layout>
    <SEO title="Algorithm Challenges" location="/katas" />
    <Intro />
    <Challenges />
  </Layout>
);
