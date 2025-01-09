import './index.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoVimeo } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container-1">
                <img src='/image 3.png' />
                <p>orporate clients and leisure travelers has</p>
                <p>been relying on Groundlink for dependable</p>
                <div className="icons-container">
                    <div className="icon-container">
                        <FaFacebookF />
                    </div>
                    <div className="icon-container selected-icon">
                        <FaTwitter />
                    </div>
                    <div className="icon-container">
                        <IoLogoVimeo />
                    </div>
                    <div className="icon-container">
                        <FaPinterest />
                    </div>
                </div>
            </div>
            <ul className='container-3'>
                <h3>Useful Links</h3>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
            <ul className='container-3'>
                <h3>Products</h3>
                <li>Listing</li>
                <li>Details</li>
                <li>Enquiry Form</li>
            </ul>
            <ul className='container-4'>
                <h3>Contact</h3>
                <li> <CiMail />  <p>unitedbuildpro@gmail.com</p></li>
                <li> <IoCallOutline />   <p>+91 9731125090, 9731125090</p>  </li>
                <li> <CiLocationOn /> <p>#63/A, E Block, 2nd Stage, Dr.Rajkumar Road, <br/> Subramanya Nagar Bangalore-560010</p> </li>
            </ul>
        </div>
    )
}
export default Footer