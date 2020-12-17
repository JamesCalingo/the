import React from "react";
import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";
import gql from "graphql-tag";
// import Swal from "sweetalert2"

export default function ReportButton({ id, flagged }) {
  const REPORT_MESSAGE = gql`
    mutation reportMessage($messageID: ID!) {
      reportMessage(messageID: $messageID) {
        id
        body
        flagged
      }
    }
  `;

  const [flagMessage] = useMutation(REPORT_MESSAGE, {
    variables: { messageID: id },
  });

  // function confirmReport(){
  //   Swal.fire({
  //     title: "Are you sure you want to report this message?",
  //     icon: "warning",
  //     showDenyButton: true,
  //     confirmButtonText: "Yes!"
  //   }).then(result => {
  //    if (result.isConfirmed){
  //      Swal.fire({
  //        title: "We're sorry you had to see that. We'll take it down so that no one else has to see it.",
  //       text: "Thank you for helping us keep this site a safe place for everyone."})
    
  //      }
  //    })
  //   }
  

  return (
    <Button onClick={flagMessage} className={flagged? "btn btn-success mb-3" : "btn-danger btn mb-3"}>
     {flagged ? "Unflag" : "Report"}
    </Button>
  );
}
