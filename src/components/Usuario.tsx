import { useState } from "react";
import Counter from "./Counter";

interface User {
    uid: String;
    name: String;
}

const Usuario = () => {

    const [ user, setUser ] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario</h3>
            <br />

        <button
            className="btn btn-outline-primary"
            onClick={ login }>
            Login
        </button>
        
        {
            (!user)
                ? <pre>{ JSON.stringify( 'No hay usuario' ) }</pre>
                : <pre>{ JSON.stringify( user ) }</pre>
        }
        
        </div>
    )
}

export default Usuario
