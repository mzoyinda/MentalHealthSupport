import React, { Component } from 'react';
// import './index.css';
import logo from './logo.png';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlinePlus } from 'react-icons/hi';
import { FiMinus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
class Navigation extends Component {
   state = {
      isClicked: false,
      modalShow: false,
      showNav: false,
   }
   navClickHandler = () => {
      this.setState({ showNav: !this.state.showNav })
   }

   clickedHandler = (e) => {
      e.preventDefault()
      this.setState({ isClicked: !this.state.isClicked, })
   }
   modalClickedHandler = (e) => {
      e.preventDefault()
      this.setState({ modalShow: !this.state.modalShow, })
   }
   render() {
      const navStyle = this.state.showNav ? { display: "grid" } : { display: "none", }
      const styles = {
         color: "#e01860",
         fontSize: '25px',
         display: "inline-block",
         textAlign: 'left',
         padding: "0",
         marginLeft: "-10px",
         transform: "translate(-8px, 8px)"
      }
      const smallStyle = {
         display: 'flex',
         justifyContent: "space-between",
         paddingRight: "15px",
      }
      const modalStyle = this.state.modalShow ? { display: "grid", gridTemplateColumn: "1fr", padding: "0 15px", } : { display: 'none' }
      const modalIcon = this.state.modalShow ? (<FiMinus />) : <HiOutlinePlus />
      const styled = this.state.isClicked ? { display: "grid", gridTemplateColumn: "1fr", } : { display: 'none' }
      return (
         <nav className="navigation">
            <ul className="modal" style={styled} >
               <li><NavLink to="/help">Call</NavLink></li>
               <li><NavLink to="/help">Help Near Me</NavLink></li>
            </ul>
            <div className="largescreen">
               <a href="/"><img src={logo} alt="" /></a>
               <ul>
                  <li className="link home">
                     <NavLink to="/" activeClassName="active">Home</NavLink>
                  </li>
                  <li className="link about">
                     <NavLink to="/about" activeClassName="active">About Us</NavLink>
                  </li>
                  <li className="link blog">
                     <NavLink to="/blog" activeClassName="active">Blog</NavLink>

                  </li>
                  <li className="link">
                     <NavLink to="help" className="show" activeClassName="active">Help</NavLink>
                     <button onClick={this.clickedHandler} style={styles}><RiArrowDropDownLine /></button>
                  </li>
                  <li className="link team">
                     <NavLink to="/team" activeClassName="active">Team</NavLink>
                  </li>
               </ul>
            </div>
            <div className="smallscreen">
               <div className="smallContainer">
                  <div className="img"><a href="/"><img src={logo} alt="" /></a></div>
                  <div onClick={this.navClickHandler} className="pinkContent">
                     <h2 onClick={this.navClickHandler}>Menu</h2>
                     <div onClick={this.navClickHandler} className="smallIcon"><GiHamburgerMenu /></div>
                  </div>
               </div>
               <ul className="links" style={navStyle}>
                  <li className="link home"><NavLink to="/" activeClassName="activated" onClick={this.navClickHandler}>Home</NavLink></li>
                  <li className="link about" onClick={this.navClickHandler}><NavLink to="/about" activeClassName="activated">About Us</NavLink></li>
                  <li className="link blog" onClick={this.navClickHandler}><NavLink to="/blog" activeClassName="activated" onClick={this.navClickHandler}>Blog</NavLink></li>
                  <div style={smallStyle}>
                     <li className="link help" onClick={this.navClickHandler}><NavLink to="/help" activeClassName="activated" >Help  </NavLink>
                        <div className="smallModal" style={modalStyle}>
                           <li><NavLink to="/help">Call</NavLink></li>
                           <li><NavLink to="/help">Help Near Me</NavLink></li>
                        </div>
                     </li>
                     <div onClick={this.modalClickedHandler}>{modalIcon}</div>

                  </div>
                  <li className="link team"><NavLink to="/team" activeClassName="activated">Team</NavLink></li>
               </ul>
            </div>
         </nav>
      )
   }
}
export default Navigation