import gql from "graphql-tag"


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

export const LOGIN = gql`
mutation login(
  $email: String!
  $password: String!
)
{login(email: $email, password: $password){
  token
}}
`
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


const POST_MESSAGE = gql`
  mutation postMessage($body: String!) {
    postMessage(body: $body) {
      id
      body
      createdAt
      likes
      flagged
    }
  }
`;