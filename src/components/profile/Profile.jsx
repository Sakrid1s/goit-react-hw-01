import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTagLocation}>@{tag}</p>
        <p className={css.userTagLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.listStats}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.listStats}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.listStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
