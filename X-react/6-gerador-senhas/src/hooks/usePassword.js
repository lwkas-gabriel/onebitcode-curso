import { useState } from "react";

export default function usePassword(){
    const [password, setPassword] = useState("");
     
    const getPassword = () => {
        setPassword("2");
    }

    return { password, getPassword }
}