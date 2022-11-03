import {React, useEffect} from 'react'
import { Octokit } from "octokit";


const Work = () => {

const octokit = new Octokit({ 
  auth: ""
});

useEffect(() => {
    getRepo()
}, [])

async function getRepo() {
    const result = await octokit.request('GET /users/gomezanthony/repos', {
        username: 'GomezAnthony'
    });
    console.log(result.data)
}


  return (
    <div>
        
    </div>
  )
}

export default Work