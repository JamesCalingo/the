import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { FETCH_MESSAGES } from '../utils/queries'
import AdminListItem from "../components/AdminListItem";
import Swal from "sweetalert2"

export default function Admin() {
  const { loading, data, error } = useQuery(FETCH_MESSAGES);

  if (data) {
    console.log(data);
  }

  useEffect(() => {
    Swal.fire({
      title: "YOU'RE NOT SUPPOSED TO BE HERE!",
      icon: 'warning'
    })
  })

  return (
    <div className="container">
      <h1>ADMIN PAGE</h1>
      <p>You are a SNEAKY SNEAKY SOB if you're not me and you're here!</p>
      <p>This is where we collect those unfortunate non-encouraging messages that end up on our app. If you believe the message was sent here mistakenly, you can "unflag" it to send it back to public view, but if it's here for valid reasons, you can delete it from the database. If there's no messages here, then hooray! There are currently zero flagged messages!</p>
    
      <ul className="list-unstyled">
        {loading ? (
          <h1>loading...</h1>
        ) : error? (
          <h1>There's a problem! An error occured.</h1>
        ) : (
          data.getMessages
          .filter(message => message.flagged)
            .map((message) => {
              return(
                <AdminListItem key={message.id} message={message} />
              )
            })
        )}
      </ul>
      <div className="text-center">
        <Link to="/" className="button btn btn-primary text-center mb-5">
          Return Home
        </Link>
      </div>
    </div>
  );
}