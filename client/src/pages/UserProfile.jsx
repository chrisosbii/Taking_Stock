
import { Navigate, useParams } from 'react-router-dom';

import React, {useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import FavoriteStockList from '../components/FavoriteStockList'
import Auth from '../utils/auth';

export default function UserProfile () {
  const { username: userParam } = useParams();
  const token = Auth.getToken();
  console.log(token);
  const { loading, error, data } = useQuery(GET_USER, { context: {headers:{authorization: `Bearer ${token}`}}});

  const user = data?.user || {};
  
  console.log(user.username)

  // navigate to personal profile page if username is yours

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return(
    <div>
      <div><p>This is where the username goes</p></div>
      <FavoriteStockList
        stocks={user.favoriteStocks}
      />
    </div>
      
  )
}



