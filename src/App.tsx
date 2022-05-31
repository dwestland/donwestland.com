import React, { useEffect } from 'react'
import './scss/main.scss'

function App() {

  useEffect(() => {
    console.log('%c This is a console message ', 'background: red; color: white', );
  }, [])
  
  return (
    <div className="container">
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div>
      <img src="/images/tech-logos.jpg" alt="Technology Logos" />
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row preamble'>
        <aside>
          <img src="/images/don-westland.jpg" alt="Don Westland" />
        </aside>
        <section>
          <h1>Don Westland</h1>
          <h2>Front End<br />Developer</h2>
          <p>
          Email: <a href = "mailto: don@westland.net">don@westland.net</a><br />
          GitHub: <a href = "https://github.com/dwestland" target="_blank" rel="noreferrer">https://github.com/dwestland</a><br />
          Resume: <a href="./westland-resume-2022.pdf" target="blank">westland-resume-2022.pdf</a></p>
        </section>
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
        <section>
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
        </section>
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
        <aside>
          {/* <img src="/images/marine-corps-pics.jpg" alt="Don Westland" /> */}
        </aside>
        <section>
          <h2>Video Production</h2>
          <h3>Sub Title</h3>
        </section>
      </div>
      <div className='row-spacer'>
        &nbsp; 
      </div>
      <div className='row'>
        <aside>
          <img src="/images/marine-corps-pics.jpg" alt="Marine Corps" />
        </aside>
        <section>
          <h2>U.S.M.C.</h2>
          <h3>United States Marine Corps Reserve</h3>
          <p>
          Helicopter Mechanic and Crew Chief<br />
          E-4, Honorable Discharge</p>
        </section>
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