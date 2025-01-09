import { Component } from 'react'
import TopSection from '../TopSection'
import AboutUs from '../AboutUs'
import OurSevices from '../Ourservices'
import RecentProjects from '../RecentProjects'
import HowWeWork from '../HowWeWork'
import ClientsFeedback from '../ClientsFeedback'
import ContactUs from '../ContactUs'
import Footer from '../Footer'
import './index.css'
const Home = () => {
    return (
        <div className="home-background">
            <TopSection />
            <AboutUs />
            <OurSevices />
            <RecentProjects />
            <HowWeWork/>
            <ClientsFeedback/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}
export default Home

