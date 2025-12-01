import React from 'react'
import Footer from './Footer'
import Header from './Header'

const About = () => {
  return (

   <main className="relative w-full min-h-screen  bg-black text-white">
    <Header />
<div className=" flex flex-col justify-center gap-6 max-w-6xl mx-auto px-6 pt-24">



<section className="mb-8">
<h2 className="text-lg font-medium">Who we are</h2>
<p className="mt-3 text-gray-700">
GambitFlix is a curated video library focused on chess and strategy content. We provide
lessons, game analyses, and recorded events for learners at every level.
</p>
</section>


<section className="mb-8">
<h2 className="text-lg font-medium">Our mission</h2>
<p className="mt-3 text-gray-700">
Our mission is to make high-quality chess education accessible and enjoyable. We aim to
help players improve through clear explanations, practical exercises, and thoughtfully
organized courses.
</p>
</section>





<section className="mb-8">
<h2 className="text-lg font-medium">The team</h2>
<p className="mt-3 text-gray-700">A small team of coaches, curators, and developers passionate about chess.</p>
</section>




<Footer />
</div>
</main>
  )
}

export default About