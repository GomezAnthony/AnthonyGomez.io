import { React, useEffect, useState } from "react";
import octokit from "../../utils/octokit";

const Work = () => {
  const [repo, setRepo] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      try{
        const response = await octokit.request("GET /users/GomezAnthony/repos", {
          username: "GomezAnthony"
        })
        setRepo(response)

      }catch (error) {
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
      }
       
    };


    getRepos()
  }, []);
  return <div>{}</div>;
};

export default Work;
