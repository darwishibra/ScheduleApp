import Button from "../Button/Button"
import styles from "./Header.module.css"

const Header = (props) => {
    const onClick = () => {
        console.log("Click")
    }
    return (
        <div className={styles.header}>
            <div className={styles.section}>
                <h1 id={styles.homeHeading}>This is a Schedule Formatting Web Application</h1>
                <Button onClick={onClick} text="Hello" color="red" />
            </div>
        </div>
    )
}

export default Header