import React from "react";
import { Link } from "react-router-dom";
import {POST_MESSAGE} from "../utils/queries"
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/client";


export default function CreateMsg() {
  function postMessageCallback() {
    postMessage();
  }

  const { values, onChange, onSubmit } = useForm(postMessageCallback, {
    body: "",
  });

  const [postMessage] = useMutation(POST_MESSAGE, {
    variables: values,
    update(_, res) {
      console.log(res);
      values.body = "";
    },
  });

  return (
    <div className="text-center">
      <div>
        <h3>Send your own message of encouragement to others!</h3>

        <p>
          Here, you can write your own messages to encourage others! Simply type
          in your message, then click the "Submit" button.
        </p>
      </div>
      <form onSubmit={onSubmit} className="text-center">
        <label htmlFor="message">Your message</label> <br />
        <textarea
          rows="3"
          onChange={onChange}
          value={values.body}
          name="body"
          id="message"
        />
        <br />
        <button type="submit" className="btn btn-primary btn-lg mt-3 mb-5">Submit Message</button>
        <br />
       
      </form>
      <Link to="/messages" className="button btn btn-primary">Back to Message List</Link>
    </div>
  );
}


