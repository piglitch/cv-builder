import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

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
            src="data:image/png;base64,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"
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