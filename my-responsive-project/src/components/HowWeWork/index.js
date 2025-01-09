import './index.css'
const HowWeWork = () => {
    return (
        <div className="how-we-worksection">
            <img src='pexels-pixabay-162539.png' className='pixabay' />
            <div className="how-we-work-card">
                <h1>How We Work</h1>
                <div className="cards">
                    <div className="card">
                        <h1 className='number'>01</h1>
                        <h3>Collaborative Design Process</h3>
                        <p>We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning.</p>

                    </div>
                    <div className="card Selected">
                        <h1 className='number number_2'>02</h1>
                        <h3>Seamless Execution</h3>
                        <p>From construction to interiors, we deliver quality, precision, and timely results to bring your dream to life.</p>

                    </div>
                    <div className="card">
                        <h1 className='number'>03</h1>
                        <h3>Comprehensive Support</h3>
                        <p>We ensure a smooth handover with regular updates, valued feedback, and meticulous final touches.</p>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default HowWeWork
