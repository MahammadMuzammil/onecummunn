import './index.css'
import { FaArrowRight } from "react-icons/fa";
const RecentProjects = () => {
    return (
        <div className="recent-projects">
            <h1>Our Recent Projects</h1>
            <div className="projects-container">
                <img src='/button.png' />
                <div className="project-container">
                    <img src='/img (1).png' className='project-image' />
                    <div className="project-detail">
                        <p>Construction</p>
                        <h1>Contemporary Vilas</h1>
                        <div className='view-projects'>
                            <p>View Projects</p>
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <img src='/img (2).png' className='project-image' />
                    <div className="project-detail">
                        <p>Construction</p>
                        <h1>Empire State Buliding</h1>
                        <div className='view-projects'>
                            <p>View Projects</p>
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>


                </div>
                <div className="project-container">
                    <img src='/img (3).png' className='project-image' />
                    <div className="project-detail">
                        <p>Construction</p>
                        <h1>Cenral Park Tower</h1>
                        <div className='view-projects'>
                            <p>View Projects</p>
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                </div>
                <img src='/arrow.png' />
            </div>
        </div>
    )
}
export default RecentProjects