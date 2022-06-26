import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import Sop from './Top/Scrolltotop'
import {History_about,Team,Map,Time,Info,Policy} from './About';
const Test = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Sop/>
                <Navbar />
                <History_about />
            </div>
            <Time/>
            <Team/>
            <Map />
            <Info/>
            {/* <Policy/> */}
            <Footer />
        </div>
    )
}
export default Test;
