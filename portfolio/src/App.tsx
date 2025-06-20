import Footer from './components/Footer';
import KonamiEgg from './components/Konami';
import { randomQuote } from './components/Quotes';
import { useState } from 'react'
import './styles/App.css'

function AboutMe() {
  const [mj, setMj] = useState(false);
  const [quote, setQuote] = useState(randomQuote);


  return (
    <> 
       <KonamiEgg/>
        <div className='my-intro'>
          <h2>Hello! I'm Omar a Software engineer</h2>
        <p>Welcome to my portfolio</p>   
          <button onClick={() => setMj(true)} id='mj'>About Me</button>
        </div>

      <div className='about-me'>

        {mj && (
          <div className='overlay' onClick={() => setMj(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
              <p>I'm Omar, a self-taught developer from Cairo, Egypt. I started learning web development and since then, I've been building real projects, learning by doing.</p>
              <p>So far, I’ve completed 13 projects — including apps like a calculator, to-do list, blog, dashboard, and even an e-commerce site. Every project pushed me to learn something new and solve real problems.</p>
              <p>I'm currently focused on learning full-stack development, and I'm excited to see what the future holds!</p>
              
              <div className='project-highlights'>
                <p>❁ Project Hightlights ❁</p>
                 <ul>
                  <li><b>Fnaf 1</b> - currently being built its a top view fnaf 1 game i tried my best to make it first person using three.js but my device can't handle it</li>
                  <li><b>BirAnA</b> - My biggest project yet im proud of it took me around 2 weeks to finish it </li>
                  <li><b>Guess N Live</b> - this project was really fun to build! its not as hard as the other's but i love it!</li>
                  <li><b>Expense-Tracker</b> - this project was hard for me because i got an error every like second but im happy it turned out well (kinda)</li>
                  </ul>
                 
              </div>
              
              <button id='mj-check' onClick={() => setMj(false)}>Close</button>
            </div>
          </div>
        )}

        <h2 className='intro-label'>FrontEnd Languages/Frameworks I Have Experience In</h2>
        <div className='my-skills'>
          <span className='skills-card'>React</span>
          <span className='skills-card'>JavaScript</span>
          <span className='skills-card'>TypeScript</span>
          <span className='skills-card'>HTML</span>
          <span className='skills-card'>CSS</span>
        </div>

        <hr id='intro-hr' />
        <h2 className='intro-label'>Goals</h2>
        <div className='intersts'>
          <p>My goal is to become a skilled developer. Right now, I’m focused on learning:</p>
          <ul>
            <li>Front-end ✅ (solid foundation)</li>
            <li>Back-end (actively learning)</li>
            <li>UI/UX Design</li>
            <li>C Programming</li>
            <li>C++ Programming</li>
          </ul>
        </div>

        <h2 className='intro-label'>Interests</h2>
        <div className='intersts'>
          <p>Aside from coding, I’m interested in:</p>
          <ul>
            <li>Gaming — big fan of Doom and Destiny</li>
            <li>Programming — always excited to build new things</li>
            <li>Reading — mostly self-help and tech books</li>
            <p style={{marginTop: "10px", textAlign: "center"}}>
              And plenty of other hobbies that keep life fun!
            </p>        
          </ul>
        </div>

        
        <h2 className='intro-label'>Quotes i like</h2>
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

