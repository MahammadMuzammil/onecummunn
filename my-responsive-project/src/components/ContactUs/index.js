import './index.css'
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
const ContactUs = () => {
    return (
        <div className="contact-us-section">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <div className="name-input-container">
                    <input type='text' placeholder='First Name*' className='name-input' />
                    <CgProfile className='profile-icon' />
                </div>
                <div className="two-input">

                    <div className="input-container selected-field">
                        <input type='email' placeholder='Mail Address' className='name-input' />
                        <CiMail className='profile-icon' />
                    </div>
                    <div className="input-container">
                        <input type='text' placeholder='Phone Number' className='name-input' />
                        <BiPhoneCall className='profile-icon' />
                    </div>
                </div>
                <textarea rows={10} cols={70} placeholder='Enter Message'></textarea>
                <button className='submit-request'>Submit Request  <FaArrowRight /> </button>
            </form>
        </div>
    )
}
export default ContactUs
