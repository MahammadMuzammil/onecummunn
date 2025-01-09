import './index.css';

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="container">
        <img src="/Rectangle.png" className="rectangle" alt="Rectangle" />
        <img src="/about-us.png" className="about-us" alt="About Us" />
        <img src="/dot_shapes.png" className="dot-shapes" alt="Dot Shapes" />
      </div>
      <div className="about-text-section">
        <h1>About Us</h1>
        <p>
          Everyone has a vision of their dream home or workspace — a space filled with special features and lasting impressions. 
          At United Buildpro Pvt Ltd, we bring those dreams to life. Even if you're unsure of what you want, our team of experts 
          knows the right questions to ask to uncover your desires and create a space that's uniquely yours.
        </p>
        <p>
          Every project we undertake is a harmonious blend of our client's vision and our design expertise. 
          We focus on creating spaces that not only meet expectations but exceed them, offering a seamless integration of style and functionality.
        </p>
        <button className='contactus'>Kow More</button>
      </div>
    </div>
  );
};

export default AboutUs;
