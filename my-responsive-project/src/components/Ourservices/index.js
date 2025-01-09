import './index.css'
import { FaArrowRight } from "react-icons/fa";
const services = [
    {
        path: '/hook.png',
        name: 'Bulding Materials',
        description: 'United Buildpro Pvt Ltds e-commerce platform offers a hassle-free way to source top-quality building supplies from the comfort of your home.',
        isSelected: false,
        position:'top-right'

    },
    {
        path: '/maintenance.png',
        name: 'Joint Ventures',
        description: 'United Buildpro Pvt Ltd specializes in fostering successful partnerships through joint development ventures.',
        isSelected: true,
         position:'top-right'
    },
    {
        path: '/Page-1.png',
        name: 'RERA Consultants',
        description: 'Navigating the complexities of real estate transactions is easier with United Buildpro’s expert consultants by your side.',
        isSelected: false,
         position:'top-right'
    },
    {
        path: '/excavator.png',
        name: '2D & 3D Constultant',
        description: 'Designing a building starts with a vision, and at United Buildpro, we help you visualize that vision with precision.',
        isSelected: false,
         position:'bottom-left'
    },
    {
        path: '/flasks.png',
        name: 'Construction & Interior',
        description: 'Your dream space deserves the best execution, and that’s where United Buildpro Pvt Ltd excels.',
        isSelected: false,
         position:'top-left'
    },
    {
        path: '/car-repair.png',
        name: 'Land Development',
        description: 'At United Buildpro Pvt Ltd, we transform undeveloped land into thriving spaces through our comprehensive land development services.',
        isSelected: false,
         position:'bottom-left'
    }
]

const OurSevices = () => {

    return (
        <div className="our-services">
            <h1>Our Services</h1>
            <ul className="sevices-container">
                {services.map(eachService => {
                    const { path, name, description, isSelected,position } = eachService
                    return (
                        <li className={`service-card ${isSelected ? 'selected' : ''} `} >
                            <div className={`orange-box ${position}`}></div>
                            <div className={`container-2 `}>

                                <img src={path} />
                                <h1 className='service-name'>{name}</h1>
                                <p className={`service-description ${isSelected ? 'selected-service' : ''}`}>{description}</p>
                                <div className='read-more'>
                                    <p>Read More</p>
                                    <FaArrowRight />
                                </div>
                            </div>


                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
export default OurSevices






