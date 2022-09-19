// import '/css/navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-sticky">
                <div className="nav-brand">
                    <a href="/#">
                        <h2>Monster Hunter Wiki</h2>
                    </a>
                </div>
                <div className="nav-social">
                    <a href="https://github.com/Lavaruz/MH-React"><i class="github-icon fa-brands fa-github" style={{"fontSize":"1.5rem"}}></i></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar