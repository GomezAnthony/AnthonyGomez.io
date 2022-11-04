import {React, useEffect, useState} from 'react'
import octokit from '../../utils/octokit'


const Work = () => {

  const [repo, setRepo] = useState('')
  async function getRepos() {
    await octokit.request('GET /users/GomezAnthony/repos', {
        username: 'GomezAnthony'
    }).then(res => setRepo(res.data)) 

  }

  useEffect(() => {
    getRepos()
  }, [])

  console.log(repo)
  return (
    <div>
        
    </div>
  )
}

export default Work