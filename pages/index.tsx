import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Particles from '../components/Particles';
import Experience from '../components/Experience';
import Technology from '../components/Technology';

export default () => (
  <Layout>
    <Particles />
    <Profile />
    <Experience />
    <Technology />
  </Layout>
);
