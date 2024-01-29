import React from 'react';
import { Link } from 'react-router-dom'; 
import { PiSmileySadLight } from "react-icons/pi";

const ErrorPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
            <PiSmileySadLight style={styles.icon} />
            <h1 style={styles.heading}>404 Error</h1>
            <h3 style={styles.heading1}>Oops! Page Not Found</h3>
            <p style={styles.message}>
                The page you are looking for doesn't exist or an other error occurred.
            </p>
            <p style={styles.message}>
                Let's get you back on track! Here are some helpful link:
            </p>
            <p style={styles.linkList}>
                <Link to="/">Back to Home</Link>
            </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '90vh',
        alignItems: 'center',
        textAlign: 'center',
    },
    icon: {
        fontSize: '5em',
    },
    box: {
        backgroundColor: '#E0E0E0',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '20px 20px 60px #00000041',
        insetBoxShadow: '-20px -20px 60px #ffffff00',
        border: 'none',
    },
    heading: {
        fontSize: '2em',
        color: '#333',
    },
    heading1: {
        fontSize: '1em',
        color: 'red',
    },
    message: {
        fontSize: '1.2em',
        color: '#666',
        marginBottom: '20px',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
};

export default ErrorPage;