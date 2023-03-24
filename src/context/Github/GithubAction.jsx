import axios from "axios";
// const GITHUB_API = process.env.REACT_APP_GITHUB_API;

// Search user
export const SearchUser = async (text) => {
    
    const params = new URLSearchParams({
      q: text,
    });
    try{
        const token = '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';
        const headers = { Authorization: `Bearer ${token}` };
        const response=await axios.get(`https://api.github.com/search/users?${params}`,{headers})
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
    const headers = { Authorization: `Bearer ${token}` };   
    const [user,repos]=await Promise.all([
    axios.get(`https://api.github.com/users/${login}`,{headers}),
    axios.get(`https://api.github.com/users/${login}/repos?${param}`,{headers})])
    return ({user:user.data,repos:repos.data})
   }
   catch (error) {
    console.error(error);
   }

}
