import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import {Ai_tech} from './Tech';
import Sop from './Top/Scrolltotop'
const Techno = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Sop/>
                <Navbar />
                <Ai_tech />
            </div>
            <Footer />
        </div>
    )
}
export default Techno;
