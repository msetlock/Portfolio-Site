import Head from 'next/head'
import Navbar from '../components/Nav';
import Main from '../components/main'
import About from '../components/About';
import Skill from '../components/Skill';
import Image from "next/image";
import yotr from "next/image"
import Projects from '../components/Projects';
import Contact from '../components/Contact';



export default function Home() {
  return (
    <div>
      <Head >

        <title>Michael | Web Development</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
        <Navbar/>
        <Main/>
        <About/>
        <Skill/> 
        <Projects/>
        <Contact/>
     


    </div>
  )
}
