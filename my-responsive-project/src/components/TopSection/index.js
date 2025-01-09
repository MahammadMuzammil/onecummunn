import './index.css'
import AddressBar from '../AddressBar'
const TopSection = () => {

    return (
        <div className="top-background">
            <AddressBar />
            <div className="navbar">
                <img src='/image 1.png' />
                <ul className='nav-items'>
                    <li><p>Home</p></li>
                    <li><p>About Us</p></li>
                    <li><p>Sevices</p></li>
                    <li><p>Contacts</p></li>
                </ul>
            </div>
            <div className="bottom-section">
                <img src='/button.png' className='button' />
                <div className="text-section">
                    <p className='text'>GREAT EXPERIENCE IN BUILDING</p>
                    <h1 className='text-heading'>You Dream, <br />We'll Make It Real</h1>
                    <p className='text-description'> All types of work – from designing and laying the Foundation<br /> finishing and commissioning. Tight deadlines, reasonable.</p>
                    <button className='contactus'>Contact Us</button>
                </div>
                <img src='/image 2.png' className='person' />
                <img src='/button2.png' className='button' />

            </div>



        </div>
    )
}
export default TopSection