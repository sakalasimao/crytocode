import './Hero.scss';
import Mob from '../../assets/Mob.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import  {useEffect} from 'react';

const Hero = () =>{

    useEffect(()=>{
        Aos.init({duration: 1000});
    });

    return(
        <section className='hero'>
            <div className="hero__container wrapper">
                <div className="hero__left" data-aos="fade-right">
                    <img src={Mob} alt="hero" />
                </div>
                <div className="hero__right" data-aos="zoom-in-up">
                    <h1>Make easier your crypto transactions</h1>
                    <p>Our crypto offers a fast, secure, and affordable alternative 
                    for all of your financial needs. Join the cryptocurrency revolution today
                     and take control of yout financial future. Sign up now to start using our plataform for yourself.
                </p>
                <a href="#" className="btn">TRY FOR FREE</a>
                </div>
               
            </div>
        </section>
    );
}

export default Hero;