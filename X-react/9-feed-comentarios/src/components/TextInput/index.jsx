import PropTypes from "prop-types"

TextInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    //setValue: PropTypes.func,
    label: PropTypes.string
}

export function TextInput({id, value, label}){
    return (
        <>
            <label htmlFor={label}>{label}: </label>
            <input
                type="text"
                name={id}
                id={id}
                value={value}
                //onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}