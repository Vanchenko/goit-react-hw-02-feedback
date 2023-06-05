import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback } ) => (
  <ul className={css.feedback} >
    <button className={css.button} type="button" name={options[0]} onClick={onLeaveFeedback}>Good</button>
    <button className={css.button} type="button" name={options[1]} onClick={onLeaveFeedback}>Neutral</button>
    <button className={css.button} type="button" name={options[2]} onClick={onLeaveFeedback}>Bad</button> 
  </ul>
)

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
  }
