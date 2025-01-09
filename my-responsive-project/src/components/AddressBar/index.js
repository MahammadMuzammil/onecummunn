import './index.css'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const AddressBar=()=>{
    return(
        <div className="adressbar">
            <div className="align-1">
                <div className="align">
                    <IoCallOutline className='icon'/>
                    <p>9731125090,9731125090</p>
                </div>
                <div className="align">
                    <CiMail className='icon'/>
                    <p>Unitedbuildpro@gmail.com</p>
                </div>
                <div className="align">
                    <IoLocationOutline className='icon'/>
                    <p>#63/A, E Block, 2nd Stage, Dr.Rajkumar Road, Subramanya Nagar Bangalore-560010</p>
                </div>
            </div>
            <div className="align">
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaWhatsapp className='icon'/>
                <hr className='seperator'/>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' className='india'/>
                <h1>IN</h1>
            </div>
        </div>
    )
}
export default AddressBar