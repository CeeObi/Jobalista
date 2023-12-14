import { useNavigation } from "react-router-dom";






const SubmitBtn = ({text, isLoading, type="submit"}) => {

const navigation = useNavigation()
const isSubmitting = navigation.state === "submitting" || isLoading

return (<button type={type} className="btn btn-primary btn-block" disabled={isSubmitting}> {
        isSubmitting?
        <span className="loading loading-spinner loading-xs text-primary">sending...</span> 
        : 
        text || "submit" 
    } </button>)
}




export default SubmitBtn;