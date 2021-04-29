import { useState } from "react"
import Swal from "sweetalert2"

export const useForm = (callback, initialState = {}) => {
  const [values, setvalues] = useState(initialState)

  const onChange = (event) => {
    setvalues({...values, [event.target.name]: event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault()
    callback()
    Swal.fire({
      title: "We got your message!",
      text: "Thank you so much!",
      icon: "success"
    })
  }

  return {
    values,
    onChange,
    onSubmit
  }
}