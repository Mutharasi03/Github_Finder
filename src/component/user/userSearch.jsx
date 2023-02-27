import { useContext, useState } from "react";
import GithubContext from "../../context/Github/GithubContext";
import {SearchUser} from "../../context/Github/GithubAction"

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert("Please enter the text");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const searching =await SearchUser(text);
      dispatch({
        type: "GET_USER",
        payload: searching,
      });
      setText("");
    }
  };
  return (
    <div className="container mx-auto  xl:max-w-2xl">
      <div className="grid w-full grid-col-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-8">
        <div className="mx-7">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                  className="input  rounded-r-2xl text-black bg-gray-300 w-full  "
                />
                <button className="absolute top-0 right-0 rounded-l-none btn md:w-36  w-18 ">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div className="mx-auto">
            <button
              onClick={() => {
                dispatch({
                  type: "CLEAR_USER",
                });
              }}
              className="btn bg-teal-600 mb-8 text-white font-bold hover:bg-teal-400"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
