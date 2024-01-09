function Block(props) {
    return <div className="block">
        <div className="img">
        <img src={props.blockImg} alt="" />
    </div>
        <div className="blockInfo">
        <b>{props.imgNumber}</b>
        <h3>{props.imgName}</h3>
        <p>{props.imgInfo}</p>
    </div>
    </div>
}

export default Block;