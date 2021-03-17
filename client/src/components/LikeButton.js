import React from "react";
import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";
import gql from "graphql-tag";

export default function LikeButton({id, likes }) {
  const LIKE_MESSAGE = gql`
    mutation likeMessage($messageID: ID!) {
      likeMessage(messageID: $messageID) {
        id
        body
        likes
      }
    }
  `;

  const [addLike] = useMutation(LIKE_MESSAGE, {
    variables: { messageID: id },
  });

  return (
    <Button onClick={addLike} className="btn btn-success mr-4 mb-3">
      Like
    </Button>
  );
}
