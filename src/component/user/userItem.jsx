import { Link } from "react-router-dom";

function UserItem({user}) {
    return ( 
        <div className="card shadow compact side bg-base-200">
          <div className="card-body flex flex-row item-center space-x-10">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={user.avatar_url} alt="profile" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-gray-400 text-lg font-semibold pb-2">{user.login}</h3>
                <Link to={`/users/${user.login}`} className="text-base-content text-opacity-40">
                    Visit profile
                </Link>
            </div>
          </div>
        </div>
     );
}

export default UserItem;