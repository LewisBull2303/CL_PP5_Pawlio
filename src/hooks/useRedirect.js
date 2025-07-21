import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  /*
    Checks if the user is currently logged in or not
    Refreshes the access token if a user is logged in
    Redirects the user to the home page
  */

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.get('/dj-rest-auth/user/');

        if (userAuthStatus === 'loggedIn') {
          history.push('/');
        }
      } catch (err) {
        if (userAuthStatus === 'loggedOut') {
          history.push('/');
        }
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};
