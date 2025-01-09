import './index.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const ClientsFeedback = () => {

    return (
        <div className="clients-feedback-section">
            <h1>Clients Feedback</h1>
            <div className="container-1">

                <div className="round-arrow">
                    <FaArrowLeftLong />
                </div>

                <div className="feedback-card">
                    <p className='card-description-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sapiente recusandae? Saepe eaque adipisci sint quis ex. Et at animi autem enim amet nulla voluptate modi? Laudantium sequi nemo dignissimos.</p>
                    <div className="profile-container">

                        <img src='/profile.png' className='profile-image' />
                        <div className="profile-text">
                            <p className='person-name'>Lee Barners</p>
                            <p className='agent'>Selling Agent</p>
                        </div>
                    </div>

                </div>
                <div className="feedback-card border-bottom">
                    <p className='card-description-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, officia eius deleniti adipisci quis minima animi enim doloribus consectetur expedita temporibus quasi quos, in voluptates rerum consequuntur natus eos inventore?</p>
                    <div className="profile-container">

                        <img src='/profile.png' className='profile-image' />
                        <div className="profile-text">
                            <p className='person-name'>Lee Barners</p>
                            <p className='agent'>Selling Agent</p>
                        </div>
                    </div>
                </div>
                <div className="feedback-card">
                    <p className='card-description-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dolore, magni, quos pariatur odit a ipsa inventore id minus beatae rem laborum, hic voluptatem sequi? Qui quisquam dolorem fugit iusto.</p>
                    <div className="profile-container">

                        <img src='/profile.png' className='profile-image' />
                        <div className="profile-text">
                            <p className='person-name'>Lee Barners</p>
                            <p className='agent'>Selling Agent</p>
                        </div>
                    </div>
                </div>



                <div className="round-arrow">
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )

}
export default ClientsFeedback




