import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
    <>
        <p className={css.counterTitleText}>{title}</p>
        {children}
    </>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}