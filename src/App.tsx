import React from 'react'
import './scss/main.scss'

function App() {
  return (
    <div className="container">
      <div className='preamble'>
        <aside>
          <img src="/images/don-westland.jpg" alt="Don Westland" />
        </aside>
        <section>
          <h1>Don Westland</h1>
          <h3>Front End<br />Developer</h3>
          <br />
          <p>Email: <a href = "mailto: don@westland.net">don@westland.net</a></p>
          <p>GitHub: <a href = "https://github.com/dwestland" target="_blank" rel="noreferrer">https://github.com/dwestland</a></p>
        </section>
      </div>
    </div>
  );
}

export default App
