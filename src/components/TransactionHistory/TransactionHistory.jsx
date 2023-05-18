import PropTypres from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({id,type,amount,currency}) => {
        return (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypres = {
  items:PropTypres.arrayOf(PropTypres.shape({ 
    id:PropTypres.string.isRequired,
    type:PropTypres.string.isRequired,
    amount:PropTypres.string.isRequired,
    currency:PropTypres.string.isRequired,
  })),
};
