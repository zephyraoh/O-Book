import PropTypes from 'prop-types';
import './styles.scss';

export default Field = ({
    value,
    type,
    name,
    placeholder,
    onChange,
}) => {

    const handleChange = (evt) => {
        onChange(evt.target.value, name)
    };


    return (
        <div className={ value.length>0 ? 'field field--has-content': 'field'}>
            <input
            value = { value }
            onChange = { handleChange }
            id = { inputId }
            type = { type }
            className = 'field-input'
            placeholder={ placeholder }
            name = { name }
            />
        </div>
    );
};

Field.propTypes = {
    value: PropTypes.string,
    type: Proptypes.string,
    name: Proptypes.string.isRequired,
    placeholder: Proptypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}


Field.defaultProps = {
    value: '',
    type: 'text',
}

