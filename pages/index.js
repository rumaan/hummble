import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Container from '../components/container';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div style={{ marginTop: `50px` }}>
      <Container>
        <h1>Hello from Home</h1>
      </Container>
    </div>
  </div>
)

export default Home
