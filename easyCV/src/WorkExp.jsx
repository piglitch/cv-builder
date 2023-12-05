/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ClearIcon from '@mui/icons-material/Clear';

export default function WorkExperience({
  exp, setExp, comp, setComp, role, setRole, from, setFrom, to, setTo, summary, setSummary, handleExpChange
}) {
  const [showInputs, setShowInputs] = useState(false);
  const [editing, setEditing] = useState(false);
  const [edit_id, setEdit_id] = useState('');
  const [edit_comp, setEdit_comp] = useState('');
  const [edit_role, setEdit_role] = useState('');
  const [edit_from, setEdit_from] = useState('');
  const [edit_to, setEdit_to] = useState('');
  const [edit_summary, setEdit_summary] = useState('');  
  
  const showInputDivs = () => {
    setShowInputs(!showInputs)
  }
  const addNewExp = (e) => {
    e.preventDefault() 
    let doesExpExist = exp.map(x => x.comp).find((existingComp) => existingComp == comp)
    if (comp === '' || comp == null) {
      return window.alert('No input received!');
    }
    if (doesExpExist) {
      return window.alert('Exp already exists!'); 
    }
    setComp(comp);
    setRole(role);
    setFrom(from);
    setTo(to);
    setSummary(summary);
    setExp([...exp, { id: uuidv4(), comp: comp, role: role, from: from, to: to, summary: summary }]); 
    setComp('');
    setRole('');
    setFrom('');
    setTo('');
    setSummary('');
  }
  const handleDelete = (d_comp, d_id) => {
    setEditing(false)
    document.getElementById(`${d_id}`).style.display = 'none';
    document.querySelector(`.exp${d_id}`).style.display = 'none';
    console.log(d_comp, d_id)
    let index = exp.map(x => x.comp).indexOf(d_comp);
    exp.splice(index, 1);
    setComp('');
    setRole('');
    setFrom('');
    setTo('');
    setSummary('');

  }
  const selectExp = (e_id, e_comp, e_role, e_from, e_to, e_summary) => {    
    setEditing(true);  
    setEdit_id(e_id)
    setEdit_comp(e_comp)
    setEdit_role(e_role)
    setEdit_from(e_from)
    setEdit_to(e_to)
    setEdit_summary(e_summary)

    setComp(e_comp)
    setRole(e_role);
    setFrom(e_from);
    setTo(e_to);
    setSummary(e_summary);
  }
  const handleEdit = () => {
    setEditing(false)
    const selectedExp = exp.filter(xp => xp.id == edit_id)[0];
    selectedExp.comp = comp;
    selectedExp.role = role;
    selectedExp.from = from;
    selectedExp.to = to;
    selectedExp.summary = summary;
  
    setComp('');
    setRole('');
    setFrom('');
    setTo('');
    setSummary('');
  }
  return (
    <div className="personal">
      <div className="expDiv" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '500px', 
        height: '50px', 
        borderLeft: '3px solid green',
        }} onClick={showInputDivs}>
          Work Experience
      </div>
      <ul className={`${showInputs ? 'exp-active' : 'exp-inactive'}`}>  
        { exp && (               
                <div style={{
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                  color: 'white',
                }}>
                  { exp.map(xp => (
                    <div id={xp.id.toString()} key={xp.id} style={{ cursor: 'pointer', paddingLeft: '5px', display: 'flex', alignItems: 'center', backgroundColor: 'navy', border: '1px solid white', borderRadius: '5px'}}>
                      <span onClick={() => selectExp(xp.id, xp.comp, xp.role, xp.from, xp.to, xp.summary)}>{xp.comp}&nbsp;{xp.from}-{xp.to}</span>
                      <ClearIcon
                        className="clear-icon"
                        style={{ marginLeft: '5px', cursor: 'pointer' }}
                        fontSize="small"
                        onClick={() => handleDelete(xp.comp, xp.id.toString())}
                      />
                    </div>
                  ))}
                </div>                    
              ) }                 
          
          <div>
            { !editing && (  
              <div>  
                <p/>
                Add your previous work experience( &apos;s )
                <p />
                <form className="form-exp">
                  <label>Company: </label><input name="comp" type="text" value={comp} onInput={(e)=> setComp(e.target.value)} onChange={handleExpChange}/>
                  <p/><label>Role: </label><input name="role" type="text" value={role} onInput={(e)=> setRole(e.target.value)} onChange={handleExpChange}/>
                  <p/><label>From: </label><input name="from" type="text" value={from} onInput={(e)=> setFrom(e.target.value)} onChange={handleExpChange}/>&nbsp;<label>To: </label>
                  <input name="to" type="text" value={to} onInput={(e)=> setTo(e.target.value)} onChange={handleExpChange}/>
                  <p/><label>Summarize your job: </label>
                  <p/>
                  <textarea name="summary" cols="60" rows="10" value={summary} onInput={(e)=> setSummary(e.target.value)} onChange={handleExpChange}></textarea>
                </form>
                <button style={{marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow', width: '60px', border: 'none' }} onClick={addNewExp}>Add</button>
              </div>
              )
            }
            { editing && (
              <div>
                <form className="form-exp-edit">
                  <label>Company: </label><input name="comp" type="text" value={comp} onInput={(e)=> setComp(e.target.value)} onChange={handleExpChange}/>
                  <p/><label>Role: </label><input name="role" type="text" value={role} onInput={(e)=> setRole(e.target.value)} onChange={handleExpChange}/>
                  <p/><label>From: </label><input name="from" type="text" value={from} onInput={(e)=> setFrom(e.target.value)} onChange={handleExpChange}/>&nbsp;<label>To: </label>
                  <input name="to" type="text" value={to} onInput={(e)=> setTo(e.target.value)} onChange={handleExpChange}/>
                  <p/><label>Summarize your job: </label>
                  <p/>
                  <textarea name="summary" cols="60" rows="10" value={summary} onInput={(e)=> setSummary(e.target.value)} onChange={handleExpChange}></textarea>
                </form>
                <button style={{marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow', width: '60px', border: 'none' }} onClick={handleEdit}>Submit</button>
              </div>
              )
            }
          </div>           
        </ul>   
    </div>    
  )

}
