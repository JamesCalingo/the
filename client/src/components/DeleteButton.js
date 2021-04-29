import React from "react";
// import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";
// import gql from "graphql-tag";
import Swal from "sweetalert2"

export default function ReportButton({ id, flagged }) {
  // const DELETE_MESSAGE = gql`
  //   mutation deleteMessage($messageID: ID!) {
  //     deleteMessage(messageID: $messageID) 
  //   }
  // `;

  // const [deleteMessage] = useMutation(DELETE_MESSAGE, {
  //   variables: { messageID: id },
  // });



  function confirmDelete(){
    Swal.fire({
      title: "Are you sure you want to delete this message PERMANENTLY?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Yes!"
    }).then(result => {
     if (result.isConfirmed){
       Swal.fire({
         title: "Well... You can't.",
        text: "To avoid \"bad mods\", right now deleting messages is restricted to ME only."})
    
       }
     })
    }
  

  return (
    <Button onClick={confirmDelete} className="btn-danger btn mb-3 ml-4">Delete</Button>
  );
}
