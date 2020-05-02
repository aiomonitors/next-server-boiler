const Loader = props => {
    return (
        <div className="donut" style={{width: props.size,height: props.size}}>{props.children}</div>
    )
}

export default Loader;