import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Home/Profile';
import Experience from '../components/Home/Experience';
import Technology from '../components/Home/Technology';

export default () => (
  <Layout>
    <Profile />
    <Experience />
    <Technology />
  </Layout>
);
