import Footer from './components/Footer';
import { randomQuote } from './components/Quotes';
import { useState, useEffect } from 'react'
import './styles/App.css'

type text = string[];

function AboutMe() {
  const [typing, setTyping] = useState<text>([]);
  const [mj, setMj] = useState(false);
  const [quote, setQuote] = useState(randomQuote);
  useEffect(() => {
    let j = 0;
    let text = "H i... im Omar".split("");
    const typing = setInterval(() => {
      if(j < text.length){
        setTyping(prev => [...prev, text[j]])
        j++;
      }else{clearInterval(typing)}
    }, 150)
        return () => clearInterval(typing)
  }, [])

  return (
    <>
        <div className='my-intro'>
          <p>{typing}</p>
          <button onClick={() => setMj(true)} id='mj'>About Me</button>
        </div>

      <div className='about-me'>

        {mj && (
          <div className='overlay'>
            <div className='modal'>
              <p>I'm Omar, a self-taught developer from Cairo, Egypt. I started learning web development at 14, and since then, I've been building real projects, learning by doing.</p>
              <p>So far, I’ve completed 13 projects — including apps like a calculator, to-do list, blog, dashboard, and even an e-commerce site. Every project pushed me to learn something new and solve real problems.</p>
              <p>I'm currently focused on learning full-stack development, and I'm excited to see what the future holds!</p>
              
              <div className='project-highlights'>
                <p>❁ Project Hightlights ❁</p>
                 <ul>
                  <li><b>BirAnA</b> - My biggest project yet im proud of it took me around 2 weeks to finish it </li>
                  <li><b>Guess N Live</b> - this project was really fun to build! its not as hard as the other's but i love it!</li>
                  <li><b>Expense-Tracker</b> - this project was hard for me because i got an error every like second but im happy it turned out well (kinda)</li>
                  </ul>
                 
              </div>
              
              <button id='mj-check' onClick={() => setMj(false)}>Close</button>
            </div>
          </div>
        )}

        <h2 className='intro-label'>Languages/Frameworks I Have Experience In</h2>
        <div className='my-skills'>
          <a target='_blank' href='https://react.dev/'><span className='skills-card'>React</span></a>
          <a target='_blank' href='https://www.w3schools.com/whatis/whatis_js.asp'><span className='skills-card'>JavaScript</span></a>
          <a target='_blank' href='https://www.typescriptlang.org/'><span className='skills-card'>TypeScript</span></a>
          <a target='_blank' href='https://www.w3schools.com/whatis/whatis_html.asp'><span className='skills-card'>HTML</span></a>
          <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS'><span className='skills-card'>CSS</span></a>
        </div>

        <hr id='intro-hr' />
        <h2 className='intro-label'>Goals</h2>
        <div className='intersts'>
        <p>I aim to become a great developer currently wanting to Learn these: </p>
        <ul>
          <li>Front-end ✅</li>
          <li>TailWind CSS</li>
          <li>Back-end</li>
          <li>C</li>
          <li>C++</li>
        </ul>
        </div>
        
        <h2 className='intro-label'>Interests</h2>
        <div className='intersts'>
        <p>I omar am intersted in a few things</p>
        <ul>
          <li>Gaming ( i like games like Doom, Destiny )</li>
          <li>Programming ( who would have thought :) )</li>
          <li>Reading ( i like reading self help books the most )</li>
          <p style={{marginTop: "10px", textAlign: "center"}}>There are some more but it would take a lot of space to write them </p>        
        </ul>
        </div>
        
        <h2 className='intro-label'>Quotes I Live By</h2>
       <div className='intersts'> 
         <p id='quote-title'>Here is a random Quote</p>
        <p><b>"{quote}"</b></p>
          <button id='rockAndRoll' onClick={() => setQuote(randomQuote)}>Roll</button>
       </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutMe;
