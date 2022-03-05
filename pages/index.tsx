import type { NextPage } from 'next'
import Head from 'next/head'
import AuthLayout from 'layouts/AuthLayout/AuthLayout'

const Home: NextPage = () => {
  return (
    <div className={'container'}>
      <Head>
        <title>Next.js App</title>
        <meta
          name="description"
          content="This is the description of a full stack application with Next.js, React, Nest.js and TypeScript"
        />
      </Head>
      <AuthLayout />
    </div>
  )
}

export default Home