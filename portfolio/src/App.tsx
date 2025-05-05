import { randomQuote } from './components/Quotes';
import { useState } from 'react'
import './styles/App.css'

function AboutMe() {
  const [mj, setMj] = useState(false);
  const [quote, setQuote] = useState(randomQuote);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: '0px', marginTop: "20px" }}>About me</h1>
      <div className='about-me'>
        <hr id='pro-hr' />

        <div className='my-intro'>
          <h2>About Me</h2>
          <p>[Your about me text here]</p>
          <button onClick={() => setMj(true)} id='mj'>My Journey</button>
        </div>

        {mj && (
          <div className='overlay'>
            <div className='modal'>
              <p>[Your journey story here]</p>
              <button onClick={() => setMj(false)}>Close</button>
            </div>
          </div>
        )}

        <hr id='intro-hr' />
        <h2 className='intro-label'>Languages/Frameworks I Have Experience In</h2>
        <div className='my-skills'>
          <a href='https://react.dev/'><span className='skills-card'>React</span></a>
          <a href='https://www.w3schools.com/whatis/whatis_js.asp'><span className='skills-card'>JavaScript</span></a>
          <a href='https://www.typescriptlang.org/'><span className='skills-card'>TypeScript</span></a>
          <a href='https://www.w3schools.com/whatis/whatis_html.asp'><span className='skills-card'>HTML</span></a>
          <a href='https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS'><span className='skills-card'>CSS</span></a>
        </div>

        <hr id='intro-hr' />
        <h2 className='intro-label'>Goals</h2>
        <div className='intersts'>
        <p>I aim to become a great developer currently wanting to Learn these: </p>
        <ul>
          <li>Front-end ✅</li>
          <li>Back-end (Currently Learning)</li>
          <li>C</li>
          <li>C++</li>
        </ul>
        </div>
        
        <h2 className='intro-label'>Interests</h2>
        <div className='intersts'>
        <p>[Your interests go here]</p>
        </div>
        
        <h2 className='intro-label'>Quotes I Live By</h2>
       <div className='intersts'> 
         <p id='quote-title'>Here is a random Quote</p>
        <p><b>"{quote}"</b></p>
          <button id='rockAndRoll' onClick={() => setQuote(randomQuote)}>Roll</button>
       </div>

      </div>
    </>
  )
}

export default AboutMe;
