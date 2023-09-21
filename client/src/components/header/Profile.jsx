

const Profile = ({account, setAccount}) => {
    const logoutUser = () => {
        console.log("logout");
        localStorage.clear();
        setAccount('');
    }
    return(
        <div className="profile float-start" style={{width:'120px'}}>
            <div className="dropdown">
                <button
                    className="btn a_profile"
                    type="button"
                    style={{minWidth:'120px'}}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {account}
                </button>
                <ul className="dropdown-menu" style={{minWidth:'120px'}}>
                    <li>
                    <a className="dropdown-item" href="#" onClick={()=> logoutUser()}>
                    <i class="bi bi-power" style={{color:"blue",marginRight:'10px'}}></i>Logout
                    </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Profile;