import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
    <h1> Hello World!
    <Typewriter
        options={{
        strings: ['My name is Zeina Adi'],
        autoStart: true,
        loop: true, }} />
    </h1>
    </>
  )
};

export default Home;
