import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import {Our_stroy} from './Our_stroy';
import Sop from './Top/Scrolltotop'
const Stroy_ai = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Sop/>
                <Navbar />
                <Our_stroy />
            </div>
            <Footer />
        </div>
    )
}
export default Stroy_ai;
