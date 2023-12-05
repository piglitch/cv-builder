import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import Icon from './assets/cv_icon.png'

const aboutContent = `<h1 style='color: greenyellow'>About CV Easy</h1>

<p>Welcome to CV Easy, your personalized solution for creating professional and eye-catching resumes effortlessly. Our innovative CV builder empowers you to showcase your skills and experiences in a way that captures the attention of employers.</p>

<h2 style='color: greenyellow'>Key Features:</h2>

<ul>
  <ul><strong>User-Friendly Interface:</strong> Our intuitive interface makes the resume-building process simple and enjoyable. Whether you're a seasoned professional or a first-time job seeker, creating a standout CV is just a few clicks away.</ul>
  <ul><strong>Customization Options:</strong> Tailor your resume to match your unique style and career goals. Choose from a variety of templates, fonts, and colors to make your CV truly yours.</ul>
  <ul><strong>Content Guidance:</strong> Receive helpful suggestions and tips as you fill in your details. We provide guidance on what information to include, ensuring your resume meets industry standards.</ul>
  <ul><strong>Export and Share:</strong> Download your polished resume in PDF and share your CV directly with potential employers.</ul>
</ul>

<h2 style='color: greenyellow'>Why Choose CV Easy?</h2>

<ul>
  <ul><strong>Professional Results:</strong> Stand out from the crowd with a professionally crafted resume that highlights your strengths and achievements.</ul>
  <ul><strong>Time-Efficient:</strong> Save time with our streamlined process, so you can focus on what matters most—preparing for interviews and landing your dream job.</ul>
  <ul><strong>Constant Updates:</strong> Stay ahead in the competitive job market with regular updates and new features to enhance your resume-building experience.</ul>
</ul>`
const contactContent = `<h1 style='color: greenyellow'>Contact Me</h1>

<p>Feel free to reach out to me through any of the following links:</p>

<ul>
    <ul><a id='email' href="mailto:your.email@example.com">Github</a></ul>
    <ul><a id='linkedin' href="https://www.linkedin.com/in/avi-banerjee-43a8b81b7/">LinkedIn</a></ul>
    <ul><a id='insta' href="https://instagram.com/avi_innit?igshid=MTlubmhkYmN3MDU1bw==">Instagram</a></ul>
</ul>`

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModalOpen = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "black",
          color: "white",
          alignItems: "center",
          display: "flex",
          height: "60px",
          justifyContent: "space-between",
          textDecoration: "none",
          fontSize: "larger",
          position: "fixed",
          width: "100%",
        }}
      >
        {/* Image on the left */}
        <div onClick={() => location.reload()}>
          <img
            src={Icon}
            alt="CV Icon"
            height={50}
            width={80}
            style={{borderLeft: '3px solid rgb(0, 255, 255)', cursor: "pointer"}}
          />
        </div>

        {/* Menus on the right */}
        <div className="navbar-menu">
          <div
            id="menu-about"
            style={{ cursor: "pointer", paddingRight: "20px" }}
            onClick={() => handleModalOpen(aboutContent)}
          >
            About
          </div>
          <div
            id='menu-contact'
            style={{ cursor: "pointer", paddingRight: "20px" }}
            onClick={() => handleModalOpen(contactContent)}
          >
            Contact
          </div>
        </div>
      </nav>
      <Modal isOpen={modalOpen} onClose={handleModalClose} content={modalContent} />
    </>
  );
};

export default Navbar;