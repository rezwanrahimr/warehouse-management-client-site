import React from 'react';
import App from '../APP/App';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';


const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Items></Items>
           <App></App>
        </>
    );
};

export default Home;