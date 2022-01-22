import Header from './header'
import Footer from './footer'
import Services from './services';
import Pricing from './pricing';
import Contact from './contact';
import Testimonials from './testimonies';

export default function Index(){

    return (
      <>        
        <Header/>
        <Services/>
        <Pricing/>
        <Contact/> 
        <Testimonials/>
        <Footer/>
      </>
    );

}
