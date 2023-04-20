import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                {/* <p>
                Building projects my clients love have always been my passion. I am a (FE heavy) Fullstack (MERN) web developer with bachelor of science and overall 4 years of experience in Web evelopment!
                </p> */}
                <p>
                Hi, my name is Michael Marshall and I am from McPherson, Kansas. I'm a full-stack web developer with a Bachelors Degree in Science. I am married to the love of my life and have 4 dogs, 3 weiner dogs and 1 pit/mix. In my free time I like to hang out with my family, take my dogs on walks and play World of Warcraft with my friends! I am a driven and well rounded web developer with 3+ years of overall experience. Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About