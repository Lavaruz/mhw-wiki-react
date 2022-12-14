function WeaponUpgrade(props){
    let content = null

    if(props.materials.length !== 0){
        content = props.materials.map(material => {
            return(
                <div className="weapon-craft" key={material.item.id}>
                    <p><b>{material.quantity}pcs</b></p>
                    <a href="/#"><p>{material.item.name}</p></a>
                </div>
            )
        })
    }else{
        content = <div className="weapon-craft"><p>no material needed to upgrade this armor</p></div>
    }
    return(
        <>
        <div className="armor-skills">
            <h3>Upgrade Materials</h3>
            {content}
        </div>
        </>
    )
}

export default WeaponUpgrade