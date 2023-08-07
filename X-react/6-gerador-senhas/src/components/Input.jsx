import PropTypes from "prop-types"

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func.isRequired
}

export default function Input(props){
    return (
        <input
            id="passwordSize"
            type="number"
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(+ev.target.value)}
        />
    );
}