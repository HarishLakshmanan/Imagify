import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import Bottom from '../components/Bottom'


function Home() {
  return (
    <div>
      <Header/>
      <Steps />
      <Description/>
      <Testimonial/>
      <Bottom/>
    </div>
  )
}

export default Home