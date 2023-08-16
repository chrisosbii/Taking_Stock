import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const UPDATE_FAVORITE_STOCKS = gql`
  mutation updateFavoriteStocks($userId: ID!, $stockSymbol: String!) {
    updateFavoriteStocks(userId: $userId, stockSymbol: $stockSymbol) {
      _id
      favoriteStocks
    }
  }
`;
