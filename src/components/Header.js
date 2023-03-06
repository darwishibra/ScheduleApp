import Button from "./Button"
const Header = (props) => {
    const onClick = () => {
        console.log("Click")
    }
    return (
        <div className="Header">
            <Button onClick={onClick} text = "Hello" color="red" />
        </div>
    )
}

export default Header