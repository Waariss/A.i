import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import {History_about,Team,Map,Time} from './About';
const Test = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Navbar />
                <History_about />
            </div>
            <Time/>
            <Team/>
            <Map />
            <Footer />
        </div>
    )
}
export default Test;
