import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import Sop from './Top/Scrolltotop'
import {News} from './News';
const New = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Sop/>
                <Navbar />
                <News />
            </div>
            <Footer />
        </div>
    )
}
export default New;
