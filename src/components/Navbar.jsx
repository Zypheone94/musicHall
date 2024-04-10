import React from 'react'
import styles from '../styles/button.module.css';

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div>Logo</div>
        <nav>
            <ul className='flex list-none'>
                <li>Search</li>
                <li>Cours</li>
                <li>Download</li>
                <li>About us</li>
            </ul>
        </nav>
        <div id='social' className='flex'>
            <span>F</span>
            <span>G</span>
            <span>I</span>
        </div>
        <button className={`${styles.button}`}>Login</button>
    </div>
  )
}

export default Navbar