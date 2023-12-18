// fetch-github-data.js

const axios = require('axios');

async function fetchGitHubData(username) {
  try {
    // Fetch user details from GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // Extract relevant data
    const { login, name, location, public_repos, followers, following } = response.data;

    // Print data to console
    console.log(`GitHub User: ${login}`);
    console.log(`Name: ${name || 'N/A'}`);
    console.log(`Location: ${location || 'N/A'}`);
    console.log(`Public Repositories: ${public_repos}`);
    console.log(`Followers: ${followers}`);
    console.log(`Following: ${following}`);
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error.message);
  }
}

// Replace 'your-github-username' with the desired GitHub username
const githubUsername = 'yousifsamir0';
fetchGitHubData(githubUsername);
