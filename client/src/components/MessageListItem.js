import React from "react";
import moment from "moment";
// import { Link } from "react-router-dom";
import  LikeButton  from './LikeButton'
import ReportButton from './ReportButton'

export default function MessageListItem({
  message: { id, body, createdAt, likes, flagged },
}) {
  return (
    <li className="mb-4 border-bottom">
      {/* <Link to={"/update/" + id}>
        <h3>{body}</h3>
      </Link> */}
      <h3>{body}</h3>
      <p>
        {likes === 1
          ? `${likes} person liked this message.`
          : `${likes} people liked this message.`}
      </p>
      <p>This encouraging message was created {moment(createdAt).fromNow()}.</p>
      <LikeButton id={id}/>
      <ReportButton id={id} />
    </li>
  );
}
