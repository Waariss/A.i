import React from 'react'
import {Footer} from './containers';
import {Navbar} from './components';
import {Contacts} from './Contacts';
const Contact = () => {
    return (
        <div className='App'>
            <div className='bg'>
                <Navbar />
                <Contacts />
            </div>
            <Footer />
        </div>
    )
}
export default Contact;
