import React, { useState } from 'react'
import { useStat } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Elo', idade: 18 })
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <li>Home</li>
          <li>Register</li>
          <li>New Post</li>
          <li>Dasboard</li>
          <li>About Us</li>
          <li>
            <button className={styles.logout}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
