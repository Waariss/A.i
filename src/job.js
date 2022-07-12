import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import Sop from './Top/Scrolltotop'
import {Rec,CT} from './Recruit';
const New = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Sop/>
                <Navbar />
                <Rec />
            </div>
            <CT />
            <Footer />
        </div>
    )
}
export default New;
