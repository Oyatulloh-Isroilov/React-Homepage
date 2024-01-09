function NewInfo(props) {
    return <div className="new">
        <b>{props.importantInfo}</b>
        <p>{props.info}</p>
    </div>
}

export default NewInfo;