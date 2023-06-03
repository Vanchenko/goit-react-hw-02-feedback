import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, percent }) => (
    <ul className={css.counterList}>
        <span>Good : {good}</span>
        <span>Neutral : {neutral}</span>
        <span>Bad : {bad}</span>
        <span>Total : {total}</span>
        <span>Positive feedback : {percent}%</span>
    </ul>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
}