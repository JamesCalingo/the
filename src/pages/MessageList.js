import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import  { FETCH_MESSAGES } from '../utils/graphQL'
import MessageListItem from "../components/MessageListItem";

export default function MessageList() {
  const { loading, data, error } = useQuery(FETCH_MESSAGES);

  if (data) {
    console.log(data);
  }

  return (
    <div className="container">
      <h1>Messages of Encouragement from around the world!</h1>
      {/* <label htmlFor="sortBy">Sort messages by:</label>
      <select className="form-control mb-5">
        <option>Newest First</option>
        <option>Oldest First</option>
        <option>Most Likes</option>
      </select> */}
      <ul className="list-unstyled">
        {loading ? (
          <h1 className="text-center logo">loading...</h1>
        ) : error ? (
          <h1>Whoops! an error occured.</h1>
        ) : (
          data.getMessages
            .filter((message) => message.flagged === false)
            .map((message) => {
              return <MessageListItem key={message.id} message={message} />;
            })
        )}
      </ul>
      <div className="text-center">
        <Link to="/create" className="button btn btn-primary text-center mb-5">
          Write your own message here!
        </Link>
      </div>
    </div>
  );
}

