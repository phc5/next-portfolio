import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Home/Profile';
import Particles from '../components/Home/Particles';
import Experience from '../components/Home/Experience';
import Technology from '../components/Home/Technology';

export default () => (
  <Layout>
    <Particles />
    <Profile />
    <Experience />
    <Technology />
  </Layout>
);
