import styles from './Navbar.module.css'

const Navbar = () => {

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Register</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About Us</span>
            </a>
          </li>
          <li>
            <button className={styles.exit}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
