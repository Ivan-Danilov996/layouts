const IconSwitch = (props) => {
    return (
        <header className={'header'}>
            <i onClick={props.onSwitch} className={'material-icons'}>{props.icon}</i>
        </header>
    )
}

export default IconSwitch