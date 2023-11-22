

const FormInput = ({label, name, type, defaultValue, size}) => {
    return <div className="form-control">
    <label className="label">
      <span className="label-text capitalize">{label}</span>
    </label>
    <input name={name} type={type} defaultValue={defaultValue} className={`input input-bordered ${size}`} />
  </div>
}


//<FormInput label="email" name="identifier" type="email" />



export default FormInput;