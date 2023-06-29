/*const http = require('https');

const req = http.request('https://github.com/CLor4344/follower/blob/followermain/newFollowCount.txt', res => {
    const data = [];
    res.on('data', _ => data.push(_))
    res.on('end', () => {
        console.log(data.join())
    })
});
req.end();*/
// Octokit.js
// https://github.com/octokit/core.js#readme
/*import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: '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'
});

await octokit.request('GET /repos/clor4344/follower/', {
    owner: 'CLor4344',
    repo: 'follower',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
});*/
fetch('https://api.github.com/repos/CLor4344/follower/contents/newFollowCount.txt',{
    method: "GET",
    headers: {
        Authorization: 'token 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'
    }
        
})
.then(response => response.json())
.then(data => {
    //var filesha = data[1].sha
    var decodable = atob(data.content);

  console.log(data._links.git+'\n'+ decodable) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))


