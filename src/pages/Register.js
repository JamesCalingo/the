import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";

import { REGISTER_USER } from "../utils/graphQL"

export default function Register() {
  // const context = useContext(authContext);
  const { values, setValues } = useState({
    email: "",
    password: "",
    confirmPW: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [adduser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result)
    },
    variables: values
  })

  const onSubmit = (event) => {
    event.preventDefault();

  };


  return (
    <div className="text-center">
      <h1>Create an account</h1>

      <p>Thank you so much for cooperating with this step.</p>

      <p>
        All you need to do is provide your email address and a password. I
        understand if you're apprehensive about providing an email, but trust
        me: we won't send you spam or give your email to anyone.
      </p>

      <p>
        Your password must be at least eight characters long and contain at
        least one capital letter and/or one number. Also, just a helpful tip:
        try to use something you're not currently using for other
        sites/services.
      </p>
      <div className="row">
      <form className="col-md-6 justify-content-center">
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="InputEmail" value={values.email}  onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" value={values.password} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPW" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="confirmPW" value={values.confirmPW} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      </div>
    </div>
  );
}
