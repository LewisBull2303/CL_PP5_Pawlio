import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

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
