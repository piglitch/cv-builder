/* eslint-disable react/prop-types */
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { v4 as uuidv4 } from 'uuid';

export default function Education({education, setEducation, institution, setInstitution, degree, setDegree, graduationYear, setGraduationYear, specialization, setSpecialization, city, setCity}) {

  const [showInputs, setShowInputs] = useState(false);
  const [editing, setEditing] = useState(false);
  const [edit_id, setEdit_id] = useState('');
  const [edit_institution, setEdit_institution] = useState('');
  const [edit_degree, setEdit_degree] = useState('');
  const [edit_graduationYear, setEdit_graduationYear] = useState('');
  const [edit_specialization, setEdit_specialization] = useState('');
  const [edit_city, setEdit_city] = useState('');

  const showInputDivs = () => {
    setShowInputs(!showInputs);
  }

  const addNewEducation = (e) => {
    e.preventDefault();
    let doesEducationExist = education.map(x => x.institution).find((existingInstitution) => existingInstitution === institution);

    if (institution === '' || institution == null) {
      return window.alert('No input received!');
    }

    if (doesEducationExist) {
      return window.alert('Education entry already exists!');
    }
  
    setInstitution(institution);
    setDegree(degree);
    setGraduationYear(graduationYear);
    setSpecialization(specialization);
    setCity(city);
  
    setEducation([...education, {
      id: uuidv4(),
      institution: institution,
      degree: degree,
      graduationYear: graduationYear,
      specialization: specialization,
      city: city
    }]);

    setInstitution('');
    setDegree('');
    setGraduationYear('');
    setSpecialization('');
    setCity('');
    console.log(education)
  }

  const handleDelete = (d_institution, d_id) => {
    setEditing(false);
    document.getElementById(`${d_id}`).style.display = 'none';
    document.querySelector(`.ed${d_id}`).style.display = 'none';
    let index = education.map(x => x.institution).indexOf(d_institution);
    education.splice(index, 1);
    setEducation([...education]);
    setInstitution('');
    setDegree('');
    setGraduationYear('');
    setSpecialization('');
    setCity('');
  }

  const selectEducation = (e_id, e_institution, e_degree, e_graduationYear, e_specialization, e_city) => {
    setEditing(true);
    setEdit_id(e_id);
    setEdit_institution(e_institution);
    setEdit_degree(e_degree);
    setEdit_graduationYear(e_graduationYear);
    setEdit_specialization(e_specialization);
    setEdit_city(e_city);

    setInstitution(e_institution);
    setDegree(e_degree);
    setGraduationYear(e_graduationYear);
    setSpecialization(e_specialization);
    setCity(e_city);
  }

  const handleEdit = () => {
    setEditing(false);

    const selectedEducation = education.filter(edu => edu.id === edit_id)[0];
    selectedEducation.institution = institution;
    selectedEducation.degree = degree;
    selectedEducation.graduationYear = graduationYear;
    selectedEducation.specialization = specialization;
    selectedEducation.city = city;

    setInstitution('');
    setDegree('');
    setGraduationYear('');
    setSpecialization('');
    setCity('');
  }

  return (
    <div className="education">
      <div className="educationDiv" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        height: '50px',
        borderLeft: '3px solid orange',
      }} onClick={showInputDivs}>
        Education
      </div>
      <ul className={`${showInputs ? 'education-active' : 'education-inactive'}`}>
        {education && (
          <div style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            color: 'white',
          }}>
            {education.map(edu => (
              <div id={edu.id.toString()} key={edu.id} style={{
                cursor: 'pointer',
                paddingLeft: '5px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'navy',
                border: '1px solid white',
                borderRadius: '5px'
              }}>
                <span onClick={() => selectEducation(edu.id, edu.institution, edu.degree, edu.graduationYear, edu.specialization, edu.city)}>
                  {edu.institution}
                </span>
                <ClearIcon
                  className="clear-icon"
                  style={{ marginLeft: '5px', cursor: 'pointer' }}
                  fontSize="small"
                  onClick={() => handleDelete(edu.institution, edu.id.toString())}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          {!editing && (
            <div>
              <p />
              Add your education entries
              <p />
              <form className="form-education">
                <label>Institution: </label><input name="institution" type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                <p /><label>Degree: </label><input name="degree" type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
                <p /><label>Graduation Year: </label><input name="graduationYear" type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
                <p /><label>Specialization: </label><input name="specialization" type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                <p /><label>City: </label><input name="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              </form>
              <button style={{ marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow', width: '60px', border: 'none' }} onClick={addNewEducation}>Add</button>
            </div>
          )}
          {editing && (
            <div>
              <form className="form-education-edit">
                <label>Institution: </label><input name="institution" type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                <p /><label>Degree: </label><input name="degree" type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
                <p /><label>Graduation Year: </label><input name="graduationYear" type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
                <p /><label>Specialization: </label><input name="specialization" type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                <p /><label>City: </label><input name="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              </form>
              <button style={{ marginLeft: '390px', padding: '5px' }} onClick={handleEdit}>Submit</button>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}

