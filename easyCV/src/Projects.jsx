/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ClearIcon from '@mui/icons-material/Clear';

export default function Projects({
  projects, setProjects, title, setTitle, description, setDescription, technologies, setTechnologies, repo, setRepo, live, setLive, handleProjectChange
}) {
  const [showInputs, setShowInputs] = useState(false);
  const [editing, setEditing] = useState(false);
  const [edit_id, setEdit_id] = useState('');
  const [edit_title, setEdit_title] = useState('');
  const [edit_description, setEdit_description] = useState('');
  const [edit_technologies, setEdit_technologies] = useState('');
  const [edit_repo, setEdit_Repo] = useState('');
  const[edit_live, setEdit_Live] = useState('');

  const showInputDivs = () => {
    setShowInputs(!showInputs)
  }

  const addNewProject = (e) => {
    e.preventDefault();
    let doesProjectExist = projects.map(x => x.title).find((existingTitle) => existingTitle === title);

    if (title === '' || title == null) {
      return window.alert('No input received!');
    }

    if (doesProjectExist) {
      return window.alert('Project already exists!');
    }

    setProjects([...projects, {
      id: uuidv4(),
      title: title,
      description: description,
      technologies: technologies,
      repo: repo,
      live: live,
    }]);

    setTitle('');
    setDescription('');
    setTechnologies('');
    setRepo('')
    setLive('')
  }

  const handleDelete = (d_title, d_id) => {
    setEditing(false);
    document.getElementById(`${d_id}`).style.display = 'none';
    document.querySelector(`.prj${d_id}`).style.display = 'none';
    let index = projects.map(x => x.title).indexOf(d_title);
    projects.splice(index, 1);
    setProjects([...projects]);
    setTitle('');
    setDescription('');
    setTechnologies('');
    setRepo('')
    setLive('')
  }

  const selectProject = (e_id, e_title, e_description, e_technologies, e_repo, e_live) => {
    setEditing(true);
    setEdit_id(e_id);
    setEdit_title(e_title);
    setEdit_description(e_description);
    setEdit_technologies(e_technologies);
    setEdit_Repo(e_repo);
    setEdit_Live(e_live);
    setTitle(e_title);
    setDescription(e_description);
    setTechnologies(e_technologies);
    setRepo(e_repo)
    setLive(e_live)
  }

  const handleEdit = () => {
    setEditing(false);
    const selectedProject = projects.filter(proj => proj.id === edit_id)[0];
    selectedProject.title = title;
    selectedProject.description = description;
    selectedProject.technologies = technologies;
    selectedProject.live = live
    selectedProject.repo = repo
    setProjects([...projects]);
    setTitle('');
    setDescription('');
    setTechnologies('');
    setRepo('');
    setLive('');
  }

  return (
    <div className="projects">
      <div className="projectDiv" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        height: '50px',
        borderLeft: '3px solid yellow',
      }} onClick={showInputDivs}>
        Projects
      </div>
      <ul className={`${showInputs ? 'project-active' : 'project-inactive'}`}>
        {projects && (
          <div style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            color: 'white',
          }}>
            {projects.map(proj => (
              <div id={proj.id.toString()} key={proj.id} style={{
                cursor: 'pointer',
                paddingLeft: '5px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'navy',
                border: '1px solid white',
                borderRadius: '5px'
              }}>
                <span onClick={() => selectProject(proj.id, proj.title, proj.description, proj.technologies, proj.repo, proj.live)}>
                  {proj.title}
                </span>
                <ClearIcon
                  className="clear-icon"
                  style={{ marginLeft: '5px', cursor: 'pointer' }}
                  fontSize="small"
                  onClick={() => handleDelete(proj.title, proj.id.toString())}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          {!editing && (
            <div>
              <p />
              Add your projects
              <p />
              <form className="form-project">
                <label>Title: </label><input name="title" type="text" value={title} onInput={(e) => setTitle(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Description: </label><input name="description" type="text" value={description} onInput={(e) => setDescription(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Technologies: </label><input name="technologies" type="text" value={technologies} onInput={(e) => setTechnologies(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Live website: </label><input name="live" type="text" value={live} onInput={(e) => setLive(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Github Repo: </label><input name="repo" type="text" value={repo} onInput={(e) => setRepo(e.target.value)} onChange={handleProjectChange} />
              </form>
              <button style={{marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow', border: 'none' }} onClick={addNewProject}>Add more</button>
            </div>
          )}
          {editing && (
            <div>
              <form className="form-project-edit">
                <label>Title: </label><input name="title" type="text" value={title} onInput={(e) => setTitle(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Description: </label><input name="description" type="text" value={description} onInput={(e) => setDescription(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Technologies: </label><input name="technologies" type="text" value={technologies} onInput={(e) => setTechnologies(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Live website: </label><input name="live" type="text" value={live} onInput={(e) => setLive(e.target.value)} onChange={handleProjectChange} />
                <p /><label>Github Repo: </label><input name="repo" type="text" value={repo} onInput={(e) => setRepo(e.target.value)} onChange={handleProjectChange} />
              </form>
              <button style={{marginLeft: '390px', padding: '5px', backgroundColor: 'greenyellow', border: 'none' }} onClick={handleEdit}>Submit</button>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}
