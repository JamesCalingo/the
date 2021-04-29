import gql from "graphql-tag"

export const FETCH_MESSAGES = gql`
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

export const POST_MESSAGE = gql`
  mutation postMessage($body: String!) {
    postMessage(body: $body) {
      id
      body
      createdAt
      likes
      flagged
    }
  }
  `