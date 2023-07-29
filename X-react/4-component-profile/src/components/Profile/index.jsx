/* eslint-disable react/prop-types */
export default function Profile(props){
    return (
        <>
            <img src="https://github.com/lwkas-gabriel.png" alt="foto do profissional" />
            <h2>{props.name}</h2>
            <hr />
            <p>{props.position}</p>
            <hr />
            <p>{props.phone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />
        </>
    );
}