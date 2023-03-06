function Button({color, text, onClick}) {
  return (
    <button type="button" style={{color: color}} onClick={onClick}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: "blue",
    text: "Submit",
}

export default Button