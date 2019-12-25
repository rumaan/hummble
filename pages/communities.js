import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Container from "../components/container";

function Communities() {
  return (
    <div>
      <Head>
        <title>Communities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div style={{ marginTop: `50px` }}>
        <Container>
          <h1>Hello from Communities</h1>
        </Container>
      </div>
    </div>
  );
}

export default Communities;
