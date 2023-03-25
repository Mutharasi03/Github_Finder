import axios from "axios";
const GITHUB_API = process.env.REACT_APP_GITHUB_API;

// Search user
export const SearchUser = async (text) => {
    
    const params = new URLSearchParams({
      q: text,
    });
    try{
        const token = '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';
        const header= { Authorization: `Bearer ${token}` };
        const response=await axios.get(`${GITHUB_API}/search/users?${params}`,{header})
        return response.data.items
    }
   catch (error) {
    console.error(error);
   }
   
  };

 

export const userAndRepos=async(login)=>{
    const param = new URLSearchParams({
        sort:'created',
        per_page:10
      });
   try{
    const token = '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';
    const header = { Authorization: `Bearer ${token}` };   
    const [user,repos]=await Promise.all([
    axios.get(`${GITHUB_API}/users/${login}`,{header}),
    axios.get(`${GITHUB_API}/users/${login}/repos?${param}`,{header})])
    return ({user:user.data,repos:repos.data})
   }
   catch (error) {
    console.error(error);
   }

}
