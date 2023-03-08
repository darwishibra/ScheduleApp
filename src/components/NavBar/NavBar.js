import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarNav}>
        <div id={styles.navLogo} >
          PlanOut
        </div>
        <div id={styles.navPages}>
          <a className={styles.navLink} href="#">Home</a>
          <a className={styles.navLink} href="#">Pricing</a>
          <a className={styles.navLink} href="#">Contact us</a>
          <a className={styles.navLink}href="#">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

