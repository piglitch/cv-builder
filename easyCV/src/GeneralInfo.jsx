import { useState } from "react"

/* eslint-disable react/prop-types */
export default function GenInfo({
  name,
  ph,
  email,
  linkedin,
  handleChange,  
}) 

{
  const [showInputs, setShowInputs] = useState(false)

  const showInputDivs = () => {
    setShowInputs(!showInputs)
  }
  return (
    <div className="personal">
      <div className="BioDiv" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '500px', 
        height: '50px', 
        borderLeft: '3px solid blueviolet', 
        }} onClick={showInputDivs}>
          Personal details
      </div>           
          <div className={`${showInputs ? 'fields-active' : 'fields-inactive'}`}>
            <ul>Name <p><input type="text" name='name' value={name} onChange={handleChange}/></p></ul>
            <ul>Ph <p><input type="text" name="ph" value={ph} onChange={handleChange}/></p></ul>
            <ul>Email <p><input type="text" name="email" value={email} onChange={handleChange}/></p></ul>
            <ul>LinkedIn <p><textarea type="text" name="linkedin" value={linkedin} onChange={handleChange} style={{height:'40px', width: '200px'}}></textarea></p></ul>    
          </div>  
    </div>    
  )
}
