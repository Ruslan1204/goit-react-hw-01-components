import PropTypres from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0  && (<h2 className={css.titel}>{title}</h2>)} 
  

      <ul className={css.stat_list}>
        {' '}
        {stats.map(({id,label,percentage}) => (
          <li className={css.item} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypres = {
  title: PropTypres.string.isRequired,
  stats: PropTypres.arrayOf(PropTypres.shape({ 
    id:PropTypres.string.isRequired,
    label:PropTypres.string.isRequired,
    percentage:PropTypres.number.isRequired,
  })),
};
