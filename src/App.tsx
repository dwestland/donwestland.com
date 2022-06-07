import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './scss/main.scss'

function App() {
  const [ref, inView] = useInView()
  const animation = useAnimation()


  const headerVariants = {
    offscreen: {
      opacity: 0,
      scale: 0,
      // x: '100vw',
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        stiffness: 150,
      }
    }
  }


  const sectionVariants = {
    offscreen: {
      opacity: 0,
      x: 100
    },
    onscreen: {
      opacity: 1,
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }





  const liVariants = {
    hover: {
      scale: 1.05,
      originX: .3,
      transition: {
        type: 'spring',
        stiffness: 300 
      }
    },
    tap: {
      scale: .9,
    }
  }


  useEffect(() => {
    console.log(`
     ..oo8"""Y8b.._
    .88888888o.    "Yb.
  .d888P""Y8888b      "b.
 o88888    88888)       "b
d888888b..d8888P         'b
88888888888888"           8
(88DWB8888888P            8)
8888888888P               8
Y88888888P     ee        .P      “Clean code always looks like it was
 Y888888(     8888      oP       written by someone who cares.”
  "Y88888b     ""     oP"
    "Y8888o._     _.oP"            - Michael Feathers
      '""Y888boodP""'
    `)
  }, [])
// //////////////////////////////////// const inView: boolean
// //////////////////////////////////// React Hook useEffect has a missing dependency: 'animation'. Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps

    useEffect(() => {
      if (inView) {
        animation.start({
          // scale: 0.5,
          x: 0,
          transition: {
            
            type: 'spring',
            // stiffness: 150,
            duration: 0.8,
            bounce: 0.3,
          },
        })
      
      }

      if(!inView) {
        animation.start({
          x: '-100vw',
        })
      }



      console.log('%c InView ', 'background: red; color: white', inView)
    }, [inView])
    // }, [inView, animation])
  
  return (
    <div className="container">

      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="onscreen"

      >
        <img src="/images/tech-logos.jpg" alt="Technology Logos" />
      </motion.header>



{/* 
      <div className='row-spacer'>
        &nbsp; 
      </div> */}


      <div className='row preamble'>
        <motion.aside
          initial={{          
            x: -20,
            y: 0,
            opacity: 0,
            scale: 0.9,
            // scale: firstKeyframeScale
          }}
          animate={{ 
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            bounce: 1.3,
            // delay: 1,
            stiffness: 300,
            type: 'spring',
          }}
        >
          <img src="/images/don-westland.jpg" alt="Don Westland" />
        </motion.aside>
        <motion.section
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div>

          </div>
          <h1>Don Westland</h1>
          <h2>Front End<br />Developer</h2>
          <ul>
            <motion.li
              variants={liVariants}
              whileHover={'hover'}
              whileTap={'tap'}
            >
              Email: <a href = "mailto: don@westland.net">don@westland.net</a>
            </motion.li>
            <motion.li
              variants={liVariants}
              whileHover={'hover'}
              whileTap={'tap'}
            >
              GitHub: <a href = "https://github.com/dwestland" target="_blank" rel="noreferrer">https://github.com/dwestland</a>
            </motion.li>
            <motion.li
              variants={liVariants}
              whileHover={'hover'}
              whileTap={'tap'}
            >
              Resume: <a href="./westland-resume-2022.pdf" target="blank">westland-resume-2022.pdf</a>
            </motion.li>
          </ul>
        </motion.section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row'>
        <aside>
          <img src="/images/internet-brands-logos.jpg" alt="Don Westland" />
        </aside>
        <section>
          <h2>Happy Path Video</h2>
          <h3>Live Streaming Video from Venice Beach, CA</h3>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={'https://www.youtube.com/embed/c4ogYaFSSQ4'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row'>
        <aside>
          {/* <img src="/images/marine-corps-pics.jpg" alt="Don Westland" /> */}
        </aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={sectionVariants} >
            <h2>MyBeachCams.com</h2>
            <h3>Live Streaming Video from Venice Beach, CA</h3>
            <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={'https://www.youtube.com/embed/c4ogYaFSSQ4'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row'>
        <aside>
          {/* <img src="/images/marine-corps-pics.jpg" alt="Don Westland" /> */}
        </aside>
        <section>
          <h2>Live Beach Cam</h2>
          <h3>Live Streaming Video from Venice Beach, CA</h3>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={'https://www.youtube.com/embed/c4ogYaFSSQ4'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row'>
      <motion.aside

        animate={animation}

      >
          <img src="/images/westland-productions.jpg" alt="Don Westland" />
        </motion.aside>
        <section>
          <h2>Video Production</h2>
          <h3>Cinematographer, Editor, Motion Graphics, Color &amp; Sound</h3>
          <p><a href='https://www.westlandproductions.com/' target="_blank" rel="noreferrer">Westland Productions</a></p>
          <p>Produce documentaries and travel videos. The trailer for Westland Traveler has over a million views.</p>
        </section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row' ref={ref}>
        <motion.aside

          animate={animation}

        >
          <img src="/images/marine-corps-pics.jpg" alt="Marine Corps" />
        </motion.aside>
        <motion.section
          // initial={{ x: '100vw' }}
          // animate={{ x: 0 }}
          // transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        >
          <h2>U.S.M.C.</h2>
          <h3>United States Marine Corps Reserve</h3>
          <p>
          Helicopter Mechanic and Crew Chief<br />
          E-4, Honorable Discharge</p>
        </motion.section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <footer>
      <p>&copy; Don Westland {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App
