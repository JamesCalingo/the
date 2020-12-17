import React from "react";
import { Button } from "react-bootstrap";
// import { useQuery } from "@apollo/client";
// import gql from "graphql-tag";

// const FETCH_MESSAGE_BY_ID = gql`
//   {
//     getMessageByID(messageID: ) {
//       id
//       body
//       createdAt
//       likes
//       flagged
//     }
//   }
// `;

export default function UpdateMessage () {
  

    return (
      <div className="text-center">
        <h2 className="message mt-4">This is the REAL testy test.</h2>
        <h3>I'm sure there are people out there who like this message.</h3>
        <Button className="btn-success mr-2">
          Like
        </Button>
        <Button className="btn-danger ml-2">
          Report
        </Button>
      </div>
    );
  }

