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
        <h2>Hello! I'm Omar - A Passionate Software Engineer</h2>
        <p>Welcome to my digital playground</p>   
        <button onClick={() => setMj(true)} id='mj'>About Me</button>
      </div>

      <div className='about-me'>
        {mj && (
          <div className='overlay' onClick={() => setMj(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
              <p>I'm Omar, a self-taught developer from Cairo, Egypt who fell in love with coding. My journey began with web development, and I've been building real-world projects ever since - learning through hands-on experience.</p>
              <p>To date, I've successfully completed 13 diverse projects ranging from practical tools like calculators and to-do lists to complex applications including blogs, dashboards, and even a full e-commerce platform. Each project has been a stepping stone, challenging me to solve problems and expand my skills.</p>
              <p>Currently, I'm diving deep into full-stack development, excited to bridge the gap between frontend and backend systems while continuing to grow as a developer.</p>
              
              <div className='project-highlights'>
                <p>❁ Project Highlights ❁</p>
                <ul>
                  <li><b>FNAF 1 Recreation</b> - A top-down interpretation of the classic horror game (Originally attempted as a first-person experience using Three.js, but optimized for broader device compatibility)</li>
                  <li><b>BirAnA</b> - My most ambitious project to date, representing two weeks of focused development and problem-solving</li>
                  <li><b>Guess N Live</b> - A particularly enjoyable build that combines fun gameplay with clean implementation</li>
                  <li><b>Expense-Tracker</b> - A challenging project that pushed my debugging skills and ultimately resulted in a functional financial tool</li>
                </ul>
              </div>
              
              <button id='mj-check' onClick={() => setMj(false)}>Close</button>
            </div>
          </div>
        )}

        <h2 className='intro-label'>Frontend Technologies I Work With</h2>
        <div className='my-skills'>
          <span className='skills-card'>React</span>
          <span className='skills-card'>JavaScript</span>
          <span className='skills-card'>TypeScript</span>
          <span className='skills-card'>HTML</span>
          <span className='skills-card'>CSS</span>
        </div>

        <hr id='intro-hr' />
        <h2 className='intro-label'>My Learning Journey</h2>
        <div className='intersts'>
          <p>My development roadmap focuses on mastering these areas:</p>
          <ul>
            <li>Front-end Development ✅ (Established foundation)</li>
            <li>Back-end Systems (Currently expanding my knowledge)</li>
            <li>UI/UX Design Principles</li>
            <li>C Programming Language</li>
            <li>C++ Programming Language</li>
          </ul>
        </div>
        
        <h2 className='intro-label'>Personal Interests</h2>
        <div className='intersts'>
          <p>When I'm not coding, you'll find me:</p>
          <ul>
            <li>Gaming - Particularly enjoying immersive titles like Doom and Destiny</li>
            <li>Programming (of course!) - Both for work and personal projects</li>
            <li>Reading - Primarily self-improvement literature and tech-related content</li>
            <p style={{marginTop: "10px", textAlign: "center"}}>Among many other hobbies that keep life interesting!</p>        
          </ul>
        </div>
        
        <h2 className='intro-label'>Quotes i find inspiring</h2>
        <div className='intersts'> 
          <p><b>"{quote}"</b></p>
          <button id='rockAndRoll' onClick={() => setQuote(randomQuote)}>Randomize</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutMe;