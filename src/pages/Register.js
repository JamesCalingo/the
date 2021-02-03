import React from "react"

function Register() {
  return(
    <div>
      <h1>I'm so glad you want to send out messages!</h1>
      <h2>However, I'm going to need you to create an account in order to do so.</h2>

    <p>The internet, inasmuch as it's full of wonderful people like you who want to see others succeed, is also full of nasty trolls who will try to be mean or funny (or both) in order to generate negative reactions - the opposite of what I want to have happen with this site.</p>

    <p>This step helps us catch those trolls by tracking if people are consistently posting bad messages. I know that sounds like a bit of an invasion of privacy, but I promise I won't send you random emails or give your email to anyone.</p>

   <form>
  <div className="mb-3">
    <label htmlFor="InputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="InputEmail" />
  </div>
  <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword" />
  </div>
  <div className="mb-3">
    <label htmlFor="confirmPW" className="form-label">Password</label>
    <input type="password" className="form-control" id="confirmPW" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  )
}