import React from "react";
import moment from "moment";
// import { Link } from "react-router-dom";
import ReportButton from './ReportButton'
import DeleteButton from './DeleteButton'

export default function MessageListItem( {
  message: { id, body, createdAt, likes, flagged },
}) {

  function deleteMessageCallback(){
    window.location.reload(false)
  }

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
      <p>{moment(createdAt).fromNow()}</p>
     
        <ReportButton id={id} flagged={flagged}/>
        <DeleteButton id={id} callback={deleteMessageCallback}/>
    </li>
  );
}
