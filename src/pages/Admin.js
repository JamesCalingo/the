import React from "react";
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import AdminListItem from "../components/AdminListItem";


export default function Admin() {
  const { loading, data } = useQuery(FETCH_MESSAGES);

  if (data) {
    console.log(data);
  }

  return (
    <div className="container">
      <h1>ADMIN PAGE</h1>
      <p>You are a SNEAKY SNEAKY SOB if you're not me and you're here!</p>
      <p>This is where we collect those unfortunate non-encouraging messages that end up on our app. If you believe the message was sent here mistakenly, you can "unflag" it to send it back to public view, but if it's here for valid reasons, you can delete it from the database. If there's no messages here, then hooray! There are currently zero flagged messages!</p>
      <label htmlFor="sortBy">Sort messages by:</label>
      <select className="form-control mb-5">
        <option>Newest First</option>
        <option>Oldest First</option>
        <option>Most Likes</option>
      </select>
      <ul className="list-unstyled">
        {loading ? (
          <h1>loading...</h1>
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

const FETCH_MESSAGES = gql`
  {
    getMessages {
      id
      body
      createdAt
      likes
      flagged
    }
  }
`;
