

import React from 'react'
import Slide from "@/components/Slide/page"
import Contact from "@/components/Contact/page"
import Footer from "@/components/Footer/page"
export default function page() {
  return (
    <div className='bg-black min-h-max w-screen'>
      
      <Slide text={'Blogs'}/>
      <Contact/>
      <Footer/>

    </div>
  )
}
