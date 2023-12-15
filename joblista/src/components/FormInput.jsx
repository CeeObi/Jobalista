

const FormInput = ({label, name, type, value, size, changeVal, handleClicked, isDisabled}) => {
    return <div className="form-control">
    <label className=" label" htmlFor={name}>
      <span className="label-text capitalize">{label}</span>
    </label>
    <input disabled={isDisabled} onChange={changeVal} name={name} type={type} value={value} className={`input input-bordered ${size}`} onClick={handleClicked}/>
  </div>
}




export default FormInput;