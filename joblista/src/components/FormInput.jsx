

const FormInput = ({label, name, type, value, size, changeVal}) => {
    return <div className="form-control">
    <label className=" label" htmlFor={name}>
      <span className="label-text capitalize">{label}</span>
    </label>
    <input onChange={changeVal} name={name} type={type} value={value} className={`input input-bordered ${size}`} />
  </div>
}




export default FormInput;