import React from 'react'

const FormDropDown = ({label, options,name, changeVal, defaultVal}) => {
  

  return (
  <div className="form-control">
    <label className="label" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>  
    </label>
    <select onChange={changeVal} name={name} id={name} className="input input-bordered">
        {
          options.map((option) => <option key={option} value={option} selected={option===defaultVal && "selected"} >{option}</option> )
        }        
    </select>
  </div>
  )
}



export default FormDropDown