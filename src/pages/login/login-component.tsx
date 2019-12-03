import React, { useState } from 'react';
import { Redirect } from 'react-router';

export default () => {
    const [logged, setLogged] = useState<boolean>(false);

    return (
        <>
            {logged && <Redirect to="/home" />}
            <p>Login</p>
            <button onClick={() => {
                setLogged(true);
                localStorage.setItem('auth', 'criei')
            } 
            }>Clica aqui</button>
        </>
    )
}