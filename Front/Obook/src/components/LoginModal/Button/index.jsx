// import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({
    name,
    value,
    className,
}) => {

    return (
        <button type="submit" value= {value} className={className}>{name} </button>
    );
};

export default Button;
