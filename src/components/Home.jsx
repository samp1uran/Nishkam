import React, { Suspense } from 'react'
import Hero from './Hero'
import Courses from './Courses'
import Loading from './Loading'

function Home() {
  return (
    <>
        <Hero/>
        <Suspense fallback={Loading}>
            <Loading></Loading>
        </Suspense>
    </>
  )
}

export default Home