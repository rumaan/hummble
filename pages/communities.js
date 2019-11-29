import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

function Communities() {
    return (
        <div>
            <Head>
                <title>Communities</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <h1>Hello from Communities</h1>
        </div>
    )
}

export default Communities
