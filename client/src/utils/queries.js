import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      id
      username
      email
    }
  }
`;

export const GET_USER = gql`
  query user {
    user {
      username
      email
      favoriteStocks {
        symbol
        name
        exchange
        mic_code
        currency
        datetime
        timestamp
        open
        high
        low
        close
        volume
        previous_close
        change
        percent_change
        average_volume
        is_market_open
        fifty_two_week {
          low
          high
          low_change
          high_change
          low_change_percent
          high_change_percent
          range
        }
      }
    }
  }
`;

export const GET_STOCKS = gql`
  query GetStocks {
    stocks {
      symbol
      name
      exchange
      mic_code
      currency
      datetime
      timestamp
      open
      high
      low
      close
      volume
      previous_close
      change
      percent_change
      average_volume
      is_market_open
      fifty_two_week {
        low
        high
        low_change
        high_change
        low_change_percent
        high_change_percent
        range
      }
    }
  }
`;

export const GET_RANDOM_STOCK = gql`
  query GetRandomStock {
    randomStock {
      symbol
      name
      exchange
      mic_code
      currency
      datetime
      timestamp
      open
      high
      low
      close
      volume
      previous_close
      change
      percent_change
      average_volume
      is_market_open
      fifty_two_week {
        low
        high
        low_change
        high_change
        low_change_percent
        high_change_percent
        range
      }
    }
  }
`;
