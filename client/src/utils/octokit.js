import { Octokit } from 'octokit'

const octokit = new Octokit({     
    auth: process.env.REACT_APP_GH,     
});

export default octokit