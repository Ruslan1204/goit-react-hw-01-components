import PropTypres from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.titel}>{title}</h2>

      <ul className={css.stat_list}>
        {' '}
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypres = {
  title: PropTypres.string,
  stats: PropTypres.number,
};
