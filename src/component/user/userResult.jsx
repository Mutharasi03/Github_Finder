import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./userItem";
import GithubContext from "../../context/Github/GithubContext";

function UserResult() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <section>
        <div className="container mx-auto xl:max-w-6xl ">
          <div className=" grid grid-col-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResult;
