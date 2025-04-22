import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <NavLink to = "/" className={'${styles.brand} ${styles.active}'}>
            <li><span>Life</span>Dev</li>
          </NavLink>
          <NavLink to = "/login" className={'${styles.brand} ${styles.active}'}>
            <li>Login</li>
          </NavLink>
          <NavLink to = "/register" className={'${styles.brand} ${styles.active}'}>
            <li>Register</li>
          </NavLink>

            <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
