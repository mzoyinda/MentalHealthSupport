import React from 'react';
import { Footer } from 'react-materialize'

const Foot = () =>{
    return(
        <Footer
          className="#212121 grey darken-4 footer"
          copyrights="&#169;2020 Ladies Mental Support | All Rights Reserved"
            links={<ul className="footerlinks">
                <li><a className="flink grey-text text-lighten-3" href="/">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i><span className="smlinks">Whatsapp</span></a>
                </li>
                <li><a className="flink grey-text text-lighten-3" href="#!">
                    <i className="fa fa-twitter" aria-hidden="true"></i><span className="smlinks">Twitter</span></a>
                </li>
                <li><a className="flink grey-text text-lighten-3" href="#!">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i><span className="smlinks">Facebook</span></a>
                </li>
            </ul>}
         >
          <div id="footercontent">
            <div className="footerdescription">
              <div >
                <p>For enquiries, partnership and more information on our activities, connect with us on social media</p>
                
              </div>
            </div>
          </div>
          
        </Footer>
    )
}
export default Foot;