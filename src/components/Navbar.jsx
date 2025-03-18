import React, { useState } from 'react'
import { useStat } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [user, setUser] = useState({name:'Ana', idade:19})
  return (
    <>
      <nav className={styles.navbar}>
        <p>{user.name}</p>
        <p>{user.idade}</p>
        <button onClick={() => setUser((prevUser) => ({...prevUser, idade:prevUser.idade + 1}))}>Aumenta idade</button>
      </nav>
    </>
  )
}

export default Navbar
