const Alert = props =>{
    return(
        <div className={props.className}>
            <span className="closebtn" onClick={props.onClick} id={props.id}>&times;</span>
            {props.children}
        </div>
    )
}

export default Alert;