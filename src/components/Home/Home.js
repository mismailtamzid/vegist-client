import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Offers from '../Offers/Offers';
import ServiceAtHome from '../ServiceAtHome/ServiceAtHome';



const Home = () => {
    
    return (
      <div className="">
        <MenuBar/>
        <Banner/>
        <Offers/>
        <ServiceAtHome />
        <CustomerReview/>
        <Footer />
        
      </div>
    );
};

export default Home;