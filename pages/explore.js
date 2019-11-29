import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

function Explore() {
    return (
        <div>
            <Head>
                <title>Explore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <h1>Hello from Explore</h1>
        </div>
    )
}

export default Explore
