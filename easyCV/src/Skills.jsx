/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ClearIcon from '@mui/icons-material/Clear';

/* eslint-disable react/prop-types */
function SkillsInfo({skill, setSkill, skills, setSkills, handleSkillChange}) 

{
  const [showInputs, setShowInputs] = useState(false);
//  const [count, setCount] = useState(1);
  
  const addNewSkill = (e) => {
    e.preventDefault() 
    let doesSkillExist = skills.map(x => x.skill).find((existingSkill) => existingSkill == skill)
    if (skill === '' || skill == null) {
      return window.alert('No input received!');
    }
    if (doesSkillExist) {
      return window.alert('Skill already exists!'); 
    }
    setSkill(skill);
    setSkills([...skills, { id: uuidv4(), skill: skill }]); // Update listOfSkills in the parent component
    setSkill('');
    console.log(skill, skills)
  }

  const showInputDivs = () => {
    setShowInputs(!showInputs)
  }
  const handleDelete = (d_skill, d_id) => {
    document.getElementById(`${d_id}`).style.display = 'none';
    document.querySelector(`.skl${d_id}`).style.display = 'none';
    console.log(d_skill, d_id)
    let index = skills.map(x => x.skill).indexOf(d_skill);
    skills.splice(index, 1)
    console.log(skills)

  }
  return (
    <div className="Skills">
      <div className="SkillsDiv" style={{  
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '500px', 
        height: '50px', 
        borderLeft: '3px solid blue',
        }} onClick={showInputDivs}>
          Skills
      </div>           
      <div style={{color: 'white'}} className={`${showInputs ? 'Skills-active' : 'Skills-inactive'}`}>
        
        <ul>
            { skills  && (               
              <div style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center', 
                color: 'black',
              }}>
                {skills.map(skl => (
                  <div  id={skl.id.toString()} key={skl.id} style={{ paddingLeft: '5px', display: 'flex', alignItems: 'center', backgroundColor: 'darkblue', color: 'white' }}>
                    {skl.skill}
                    <ClearIcon
                    className="clear-icon"
                      style={{ marginLeft: '5px', cursor: 'pointer' }}
                      fontSize="small"
                      onClick={() => handleDelete(skl.skill, skl.id.toString())}
                    />
                  </div>
                ))}
              </div>                    
            ) }
          <form>
            <input type="text" name='skill' value={skill} onInput={(e)=> setSkill(e.target.value)} onChange={handleSkillChange}/>
            <button style={{border: 'none', marginTop:"10px", marginLeft: '10px', padding: '4px', backgroundColor: 'greenyellow'}} onClick={addNewSkill}>Add a skill</button>
          </form>  
        </ul>
      </div>   
    </div>    
  )
}

export default SkillsInfo;