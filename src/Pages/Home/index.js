import React from 'react';
import Herosection from '../../Component/Herosection/index';
import NavBar from '../../Component/NavBar/index';
import Welcome from '../../Component/Welcome/index';
import Note from '../../Component/Note/index';
import Helpline from '../../Component/Helpline/index'
import Footer from '../../Component/Footer/index';


const Index = () => {
    return (
        <div>
            <NavBar />
            <Herosection />
            <Welcome />
            <Note />
            <Helpline />
            <Footer/> 
        </div>
    )
}

export default Index;