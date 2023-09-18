import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Login(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        document.cookie = `user=${username};max-age=${60*60*24}`;
        console.log("login button was clicked")
        navigate('/admin')

    };


    const handleLogout = () => {
        document.cookie = `user=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        
    }


return (
    <div style={styles.container}>
        <div style={styles.loginContainer}>
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        id="username"
        style={styles.input}
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        placeholder="Username"/>
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password"
        style={styles.input}
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password"
        />
       
        <button style={styles.button} onClick={handleLogin}>Login</button>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
    </div>
);
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4'
    },
    loginContainer: {
        padding: '20px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        width: '300px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
    },
    logoutButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
    }
}

export default Login;