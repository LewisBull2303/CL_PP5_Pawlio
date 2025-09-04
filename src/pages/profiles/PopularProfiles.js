import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/SmallMenuContainer.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";


/*
  Truncates usernames longer than 6 characters and adds an ellipsis
*/
const truncateUsername = (username) =>
  username.length > 6 ? username.slice(0, 6) + "…" : username;

/*
  Displays first three most followed profiles in the app
*/
const PopularProfiles = () => {
  const { popularProfiles } = useProfileData();

  return (
    <Container className={`${appStyles.Content} font-weight-bold pt-1 pb-0`}>
      {popularProfiles.results.length ? (
        <>
          <p>Top Users</p>
          <div className={styles.UsersDisplay}>
            {popularProfiles.results.slice(0, 3).map((profile) => (
              <Profile key={profile.id} profile={profile} truncateOwner />
            ))}
          </div>
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;