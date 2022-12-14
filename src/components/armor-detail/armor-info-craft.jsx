function ArmorCraft(props){
    let content = null

    if(props.materials.length !== 0){
        content = props.materials.map(material => {
            return(
                <div className="armor-craft" key={material.item.id}>
                    <p><b>{material.quantity}pcs</b></p>
                    <a href="/#"><p>{material.item.name}</p></a>
                </div>
            )
        })
    }else{
        content = <div className="armor-craft-na"><p>N/A</p></div>
    }
    return(
        <>
        <div className="armor-skills">
            <h3>Crafting Materials</h3>
            {content}
        </div>
        </>
    )
}

export default ArmorCraft