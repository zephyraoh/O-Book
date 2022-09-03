import PropTypes from 'prop-types';
import './styles.scss';

const Field = ({
    value,
    type,
    name,
    placeholder, 
    onChange,
}) => {

    const handleChange = (evt) => {
        onChange(evt.target.value, name)
    };

    const inputId = `field-${ name }`;
    return (
        // <div className={ value.length>0 ? 'field field--has-content': 'field'}>
        <div>
            <input
            value = { value }
            onChange = { handleChange }
            id = { inputId }
            type = { type }
            className = 'field-input rounded-md m-2 h-12 p-2 w-2/3'
            placeholder={ placeholder }
            name = { name }
            />
        </div>
    );
};

Field.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}


Field.defaultProps = {
    value: '',
    type: 'text',
}

export default Field;