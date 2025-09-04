import React from "react";
import styles from "../../styles/Profile.module.css";
import buttonsStyles from "../../styles/FollowButtons.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";
import { useSetProfileData, useProfileData } from "../../contexts/ProfileDataContext";

const Profile = ({ profile: propProfile, imageSize = 40, truncateOwner = false }) => {
  const profileData = useProfileData();
  const profile =
    profileData.pageProfile.results.find(p => p.id === propProfile.id) || propProfile;

  const { id, following_id, image, owner } = profile;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const { handleFollow, handleUnfollow } = useSetProfileData();

  const truncateUsername = (username) =>
    username.length > 6 ? username.slice(0, 6) + "…" : username;

  return (
    <div className={`my-3 d-flex align-items-center ${styles.ProfilesDisplaySmall}`}>
      <div>
        <Link to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div>
        <Link to={`/profiles/${id}`}>
          <strong>{truncateOwner ? truncateUsername(owner) : owner}</strong>
        </Link>
      </div>
      <div className={`${buttonsStyles.FollowButtonsRemove} ml-auto`}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${buttonsStyles.Button} ${buttonsStyles.ButtonUnfollow}`}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={`${buttonsStyles.Button} ${buttonsStyles.ButtonFollow}`}
              onClick={() => handleFollow(profile)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;