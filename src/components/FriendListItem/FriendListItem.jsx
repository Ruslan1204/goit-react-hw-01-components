import PropTypres from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypres = {
  avatar: PropTypres.string.isRequired,
  name: PropTypres.string.isRequired,
  isOnline: PropTypres.bool.isRequired,
};
