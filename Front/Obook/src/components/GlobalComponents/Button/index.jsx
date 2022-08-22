// import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({
    name,
    value,
    className,
    type
}) => {

    return (
        <button type={type} value= {value} className={className}>{name} </button>
    );
};

export default Button;