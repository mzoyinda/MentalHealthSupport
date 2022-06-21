import React from 'react';
import {Navbar,Icon} from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
// import './index.css'

const Index = () => {
        return (
        <div>
        <Navbar
        alignLinks="right"
        brand={
        <a className="brand-logo" href="/">
        <img className="logo" src="/new-logo.png" alt="profile" />
        <p>Ladies Mental Support</p>
        </a>
        }
        id="mobile-nav"
        menuIcon={<Icon><GiHamburgerMenu/></Icon>}
        options={{
                draggable: true,
                edge: 'right',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
                }}
                className="Navbar white"
        >
        <NavLink className="home" to='/'>Home</NavLink>
        <NavLink to='/about-us'>About Us</NavLink>
        <NavLink to='/get-support'>Get Support</NavLink>
        </Navbar>
        
        </div>
    )
};


export default Index;

