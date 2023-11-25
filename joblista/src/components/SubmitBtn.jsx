import { useNavigation } from "react-router-dom";





const SubmitBtn = ({text, isLoading}) => {

const navigation = useNavigation()
const isSubmitting = navigation.state === "submitting" || isLoading

return (<button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}> {
        isSubmitting?<span className="loading loading-spinner">
            sending...
        </span> : text || "submit" 
    } </button>)
}


export default SubmitBtn;