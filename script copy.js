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
});
fetch('https://api.github.com/repos/CLor4344/follower/contents/newFollowCount.txt',{
    method: "GET",
    headers: {
        Authorization: 'token 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'
    }
        
})
.then(response => response.json())
.then(data => {
    //var filesha = data[1].sha
    console.log(data.content);
    var testing = data.content.replace('=\n', '');
    console.log(testing);
    var decodable = atob(data.content);

  console.log(data._links.git+'\n'+ decodable) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))
*/
const http = require('https');
/*
fetch('https://754cc620-e51b-4c58-8faa-2f4897098a38-bluemix.cloudantnosqldb.appdomain.cloud/testing',{
    method: "GET"        
})
.then(response => response.json())
.then(data => {
    //var filesha = data[1].sha
    console.log(data.content);
    //console.log(testing);
  console.log("hnn") // Prints result from `response.json()` in getRequest
})


fetch("https://754cc620-e51b-4c58-8faa-2f4897098a38-bluemix.cloudant.com/testing/_design/ddd/_view/ddd", {
    method: "GET",
    credentials: 'include',
    headers: {
        Authorization: 'Basic ' +btoa('apikey-v2-22yshm6czdhyo8a3ma5071g23ry6kqh5wy5dn8shngca:91fc214302068a55295da29da7e412c7') 
    }
})
    .then(res => {
        if (res.ok) {
            //console.log(res)
            return res.json()
        }
        else
            console.log("dun goofed")
    }).then(data =>{
        console.log(data)
        console.log(data.rows[0].value.follower)
    })

*/
fetch('https://api.twitter.com/1.1/followers/ids.json')
.then(res =>{
    if(res.ok){
        console.log('testing');
    }
    else{
        console.log('woops');
        return res.text().then(text => { throw new Error(text) })
    }
        
})