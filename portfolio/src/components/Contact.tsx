import '../styles/Contact.css';
import Footer from './Footer';

function Contact() {
    return (
        <>
            <div className='cwrapper'>

                <div className='services'>
                    <h1>Services</h1>
                    <div className='services-cards'>
                    
                        <a target='_blank' href='https://www.coursera.org/articles/web-developer'>
                        <div className='service-card'>
                            <h2>Web Development</h2>
                            <p>
                                I build fast, responsive websites using modern technologies like React, TypeScript, Zustand and more!       (front-end & semi full stack using firebase)
                            </p>
                        </div>
                        </a>
                    
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Contact;
