import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import {Contacts} from './Contacts';
import Sop from './Top/Scrolltotop'
const Contact = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Sop/>
                <Navbar />
                <Contacts />
            </div>
            <Footer />
        </div>
    )
}
export default Contact;
