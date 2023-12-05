import { useState } from "react";
import GenInfo from "./GeneralInfo";
import Preview from "./CvPreview";
import SkillsInfo from "./Skills";
import WorkExperience from "./WorkExp";
import Projects from "./Projects";
import Achievements from "./Achievments";
import Education from "./Education";
import Navbar from "./Navbar";

export default function App() {  
  // GenInfo state
  const [info, setInfo] = useState({
    name: 'John Doe',
    ph: 123456789,
    email: 'johndoe@gmail.com',
    linkedin: 'https://www.linkedin.com/in/john-doe',
  });
  
  // Skill state  
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');

  // Experience state
  const [exp, setExp] = useState([]);
  const [comp, setComp] =  useState('');
  const [role, setRole] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [summary, setSummary] = useState('');

  // Projects state
  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectTechnologies, setProjectTechnologies] = useState('');
  const [repo, setRepo] = useState('');
  const [live, setLive] = useState('');

  // Education state
  const [education, setEducation] = useState([]);
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [city, setCity] = useState('');

  // Achievments state
  const [achievements, setAchievements] = useState([]);
  const [description, setDescription] = useState('');


  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return(
    <div>
      <img src="./src/assets/cv_icon.png" height={50} width={60} style={{position: 'fixed'}}/>
      <Navbar />
    <div className="App"> 
      <div className="details-container" style={{display: "flex", flexDirection: 'column', width: '850px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', paddingTop: '100px', gap: '10px', height: 'fit-content', borderLeft: '1px solid aqua', borderRight: '1px solid red'}}>
        <GenInfo
          name={info.name}
          ph={info.ph}
          email={info.email}
          linkedin = {info.linkedin}
          handleChange={handleChange}
        />
        <SkillsInfo
          skill={skill}
          setSkill={setSkill} 
          skills={skills}
          setSkills={setSkills}
          handleChange={handleChange}
        />
        <WorkExperience 
          exp={exp} setExp={setExp}
          comp={comp} setComp={setComp}
          role={role} setRole={setRole}
          from={from} setFrom={setFrom}
          to={to} setTo={setTo}
          summary={summary} setSummary={setSummary}
          handleChange={handleChange}
        />
        <Projects
          projects={projects} setProjects={setProjects}
          title={projectTitle} setTitle={setProjectTitle}
          description={projectDescription} setDescription={setProjectDescription}
          technologies={projectTechnologies} setTechnologies={setProjectTechnologies}
          repo={repo} setRepo={setRepo}
          live={live} setLive={setLive}
          handleChange={handleChange}
        />
        <Education
          education={education}
          setEducation={setEducation}
          institution={institution}
          setInstitution={setInstitution}
          graduationYear={graduationYear}
          setGraduationYear={setGraduationYear}
          degree={degree}
          setDegree={setDegree}
          specialization={specialization}
          setSpecialization={setSpecialization}
          city={city}
          setCity={setCity}
          handleChange={handleChange}
        />
        <Achievements 
          achievements={achievements}
          setAchievements={setAchievements}
          description={description}
          setDescription={setDescription}
          handleChange={handleChange}
        />
      </div>
    <Preview 
      name={info.name} 
      ph={info.ph} 
      email={info.email} 
      linkedin={info.linkedin} 
      skill={skill} 
      skills={skills}
      exp={exp}
      projects={projects}
      education={education}
      achievements={achievements}
    />
  </div>
    </div>
  );
}