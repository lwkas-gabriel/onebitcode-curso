import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"

export default function App(){
    const user = {
        name: "joão",
        email: "email@email.com"
    }
    return (
        <>
            <UserContext.Provider value={user}>
                <h1>Usando a Context API</h1>
                <UserInfo />
            </UserContext.Provider>
        </>
    )
}