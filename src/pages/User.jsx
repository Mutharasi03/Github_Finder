import { FaUsers, FaCodepen, FaStore, FaUserFriends,FaArrowLeft } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../context/Github/GithubContext";
import Spinner from "../component/layout/Spinner";
import ReposList from "../component/repos/ReposList";
import { userAndRepos } from "../context/Github/GithubAction";

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
    });
    const loads = async () => {
      const getSingleUser = await userAndRepos(params.login);
      dispatch({
        type: "USER_AND_PROFILE",
        payload: getSingleUser,
      });
    };
    loads();
  }, [dispatch, params.login]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="container w-10/12 mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
            <span className="mr-2"><FaArrowLeft /></span>Back To Search
            </Link>
          </div>

          <div className="grid grid-cols-1  sm:grid-cols-3 gap-8 mb-6">
            <div className="custom-card-image md:row-span-2 mb-6 md:mb-0">
              <div className="rounded-2xl w-1/2 sm:w-full card image-full">
                <figure>
                  <img src={avatar_url} alt="profile" />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">{name}</h2>
                  <p>{login}</p>
                </div>
              </div>
            </div>

              
              <div className="col-span-2">
                <h1 className="text-3xl card-title">
                  {name}
                  <div className="ml-2 mr-1 badge badge-success">{type}</div>
                  {hireable && (
                    <div className="mx-1 badge badge-info">hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={html_url}
                    target="_blank"
                    className="btn btn-outline"
                    rel="noreferrer"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
              <div className="w-full col-span-full md:col-span-2 md:col-start-2 rounded-lg shadow-md bg-base-100 stats">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-md">Location</div>
                    <div className="text-lg stat-value">{location}</div>
                  </div>
                )}
                {blog && (
                  <div className="stat">
                    <div className="stat-title text-md">Website</div>
                    <div className="text-lg stat-value">
                      <a
                        href={`http://${blog}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter</div>
                    <div className="text-lg stat-value">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
            
              
              
            
          </div>

          <div className="w-full py-5 mb-6 rounded-lg shadow-lg bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
          <ReposList repos={repos} />
        </div>
      </>
    );
  }
}

export default User;
