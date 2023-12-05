import { v4 as uuidv4 } from 'uuid';
import html2pdf from 'html2pdf.js';

/* eslint-disable react/prop-types */
function Preview({name, ph, email, linkedin, skill, skills, exp, projects, education, achievements}) {
  const handleDownload = () => {
    const element = document.getElementById('resume-dwn');    
    const pdfOptions = {
      margin: 10, // Adjust margin as needed
      filename: 'resume.pdf', // Set the desired file name
      image: { type: 'jpeg', quality: 0.98 }, // Set image type and quality
      html2canvas: { scale: 2 }, // Increase scale for better resolution
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Set PDF unit, format, and orientation
    };
    html2pdf(element, pdfOptions);
  }  
  return(      
  <div className="Prev" style={{padding: '10px', height: 'max-content' }}>   
  <button id='download-btn' style={{cursor: 'pointer', background: 'greenyellow', border: 'none', padding: '5px'}} onClick={handleDownload}>Download as PDF</button>     
    <div style={{textAlign: 'center', fontSize: '20px'}}>Preview</div>
      <div style={{
        color: 'black', 
        width: "595px", 
        height: '842px', 
        backgroundColor: 'white',
        boxShadow: '5px 5px 5px 5px grey',
        marginLeft: 'auto', 
        marginRight: 'auto'
      }}>
        <div id='resume-dwn' style={{marginLeft: "40px", height: "812px",marginRight: "40px"}}>
          <h2 style={{textAlign: 'center', paddingTop: '15px'}}>{name}</h2>
          <div className="links">Ph: {ph} | {email} | <a href={linkedin}>{linkedin}</a></div>
          <h3>Skills:</h3>
          <div style={{display: 'flex', marginLeft:  '15px', justifyContent: "left"}}>
            {skills.map(skl => <div className={`skl${skl.id.toString()}`} key={uuidv4()}>{skl.skill}{skills.map(x => x.skill).indexOf(skl.skill) === skills.map(x => x.skill).length - 1 ? '' : ' | '}</div>)}
            <span style={{ marginLeft:'5px', color: 'red', backgroundColor: 'black'}}>{`${' '}${skill}`}</span></div> 
          <h3>Experience: </h3>
            <div>{exp.map(xp => <div className={`exp${xp.id.toString()}`} key={uuidv4()}><p style={{marginLeft: '5px'}}>{xp.comp}({xp.role}): <span style={{marginLeft: '30px', fontSize: '15px', fontWeight: 'bold', fontStyle: 'italic'}}>{xp.from} - {xp.to}</span></p><ul>{xp.summary}</ul></div>)}</div>
          <h3>Projects: </h3>
            <div>{projects.map(prj => <div className={`prj${prj.id.toString()}`} key={uuidv4()}><li><b>{prj.title}:</b>{prj.description}<br />Technologies used: {prj.technologies}<br />Live website: {prj.live} <br /> Github repo: {prj.repo}</li></div>)}</div>
          <h3>Education: </h3>
            <div>{education.map(ed => <div className={`ed${ed.id.toString()}`} key={uuidv4()}><p style={{marginLeft: '5px'}}>{ed.institution}({ed.degree}): <span style={{marginLeft: '30px', fontSize: '15px', fontWeight: 'bold', fontStyle: 'italic'}}>{ed.graduationYear}</span></p><ul>{ed.specialization}</ul></div>)}</div>
          <h3>Achievements: </h3>
          <div>{achievements.map(ach => <div className={`ach${ach.id.toString()}`} key={uuidv4()}><p style={{marginLeft: '5px'}}></p><li>{ach.description}</li></div>)}</div>
        </div>
      </div>
  </div>
  )
}

export default Preview;
