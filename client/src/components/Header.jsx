import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'><h1>webreznov__audio</h1></Link>
        </header>
    )
}