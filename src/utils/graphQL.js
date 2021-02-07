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

export const REGISTER_USER = gql`
mutation register(
  $email: String!
  $password: String!
  $confirmPW: String!
)
{
  register(registration: {
    email: $email
    password: $password
    confirmPW: $confirmPW
  }){id email token}
}`