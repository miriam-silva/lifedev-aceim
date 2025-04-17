import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links_list}>
          <NavLink to="/" className={`${styles.brand} ${styles.active}`}>
            <li className={styles.corrigindo}><span>Life</span>Dev</li>
          </NavLink>
          <NavLink to="/login" className={`${styles.brand} ${styles.active}`}>
            <li>Login</li>
          </NavLink>
          <NavLink to="/criar-usuario" className={`${styles.brand} ${styles.active}`}>
            <li>Register</li>
          </NavLink>
          
          <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
