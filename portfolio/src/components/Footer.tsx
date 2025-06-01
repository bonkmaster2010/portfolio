import git from '../icons/github.png';
import x from '../icons/X.png';
import red from '../icons/reddit.png';
import { useState } from 'react';

function Footer(){
    const [gub, setGub] = useState(false);
   return (
   <>
                <div className='contact-me'>
                    <h1>Want to get in touch?</h1>
                    <p>Phone: +966 54 639 7121</p>
                    <p>
                        Email: {" "}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=omarstudiesstuff@gmail.com&su=Contact%20from%20Website&body=Hi%20Omar%2C"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact me via Gmail
                        </a> or at omarstudiesstuff@gmail.com
                    </p>
                    <div className='socials'>
                        <a target='_blank' href='https://github.com/bonkmaster2010'><img id='git' src={git} alt='GitHub Icon'/></a>
                        <a target='_blank' href='https://x.com/Omar_Devs'><img id='x' src={x} alt='Twitter Icon'/></a>
                        <a target='_blank' href='https://www.reddit.com/user/Fun-Bat8048/ '><img id='reddit' src={red} alt='Reddit Icon'/></a>
                    </div>
                    <button id='whats-that' onClick={() => setGub(true)}>?</button>
                    {gub && (
                        <div className='overlay'>
                            <div className='modal'>
                                Gubby is a cosmic entity who occasionally visits this portfolio. Scientists believe he survives on CSS gradients and bug reports.
                                konami code is a secret
                                <button id="gub" onClick={() => setGub(false)}>Ok</button>
                            </div>
                        </div>
                    )}
                </div>
    </>
   )
}

export default Footer;