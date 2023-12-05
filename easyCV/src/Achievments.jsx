/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { v4 as uuidv4 } from 'uuid';

export default function Achievements({
  achievements, setAchievements, description, setDescription, handleAchievementChange
}) {
  const [showInputs, setShowInputs] = useState(false);
  const [editing, setEditing] = useState(false);
  const [edit_id, setEdit_id] = useState('');
  const [edit_description, setEdit_description] = useState('');

  const showInputDivs = () => {
    setShowInputs(!showInputs);
  }

  const addNewAchievement = (e) => {
    e.preventDefault();
    setAchievements([...achievements, {
      id: uuidv4(),
      description: description
    }]);
    setDescription('');
  }

  const handleDelete = (d_description, d_id) => {
    setEditing(false);
    document.getElementById(`${d_id}`).style.display = 'none';
    document.querySelector(`.ach${d_id}`).style.display = 'none';
    let index = achievements.map(x => x.title).indexOf(d_description);
    achievements.splice(index, 1);
    setAchievements([...achievements]);
    setDescription('');
  }

  const selectAchievement = (e_id, e_description) => {
    setEditing(true);
    setEdit_id(e_id);
    setEdit_description(e_description);
    setDescription(e_description);
  }

  const handleEdit = () => {
    setEditing(false);
    const selectedAchievement = achievements.filter(ach => ach.id === edit_id)[0];
    selectedAchievement.description = description;
    setAchievements([...achievements]);
    setDescription('');
  }

  return (
    <div className="achievements">
      <div className="achievementDiv" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        height: '50px',
        borderLeft: '3px solid red',
      }} onClick={showInputDivs}>
        Achievements
      </div>
      <ul className={`${showInputs ? 'achievement-active' : 'achievement-inactive'}`}>
        {achievements && (
          <div style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            color: 'white',
          }}>
            {achievements.map(ach => (
              <div id={ach.id.toString()} key={ach.id} style={{
                cursor: 'pointer',
                paddingLeft: '5px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'navy',
                border: '1px solid white',
                borderRadius: '5px'
              }}>
                <span onClick={() => selectAchievement(ach.id, ach.description)}>
                  {ach.description}
                </span>
                <ClearIcon
                  className="clear-icon"
                  style={{ marginLeft: '5px', cursor: 'pointer' }}
                  fontSize="small"
                  onClick={() => handleDelete(ach.description, ach.id.toString())}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          { !editing && (
            <div>
              <p />
              Add your achievements
              <p />
              <form className="form-achievement">
                <p /><label>Description: </label><p /><textarea name="description" type="text" rows={7} cols={60} value={description} onInput={(e) => setDescription(e.target.value)} onChange={handleAchievementChange}/>
              </form>
              <button style={{ marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow', width: '60px', border: 'none'}} onClick={addNewAchievement}>Add</button>
            </div>
          )}
          { editing && (
            <div>
              <form className="form-achievement-edit">
                <p /><label>Description: </label><textarea name="description" type="text" rows={7} cols={50} value={description} onInput={(e) => setDescription(e.target.value)} onChange={handleAchievementChange}/>
              </form>
              <button style={{ marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow' }} onClick={handleEdit}>Submit</button>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}
