import PropTypres from 'prop-types';
import css from "./Profile.module.css"


export const Profile = ({ username, tag, location, avatar, stats }) => {
const {followers,views,likes} = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_list}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.stats_list}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.stats_list}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypres = {
  username: PropTypres.string.isRequired,
  tag: PropTypres.string.isRequired,
  location: PropTypres.string.isRequired,
  avatar: PropTypres.string.isRequired,
  stats: PropTypres.objectOf({
    followers: PropTypres.number.isRequired,
    views:PropTypres.number.isRequired,
    likes:PropTypres.number.isRequired,
  }),
};
