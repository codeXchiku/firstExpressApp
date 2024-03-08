import 'dotenv/config'
import express  from "express"

const app = express()
const port = 3000

const githubData = {
  "login": "codeXchiku",
  "id": 116503587,
  "node_id": "U_kgDOBvG0Iw",
  "avatar_url": "https://avatars.githubusercontent.com/u/116503587?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/codeXchiku",
  "html_url": "https://github.com/codeXchiku",
  "followers_url": "https://api.github.com/users/codeXchiku/followers",
  "following_url": "https://api.github.com/users/codeXchiku/following{/other_user}",
  "gists_url": "https://api.github.com/users/codeXchiku/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/codeXchiku/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/codeXchiku/subscriptions",
  "organizations_url": "https://api.github.com/users/codeXchiku/orgs",
  "repos_url": "https://api.github.com/users/codeXchiku/repos",
  "events_url": "https://api.github.com/users/codeXchiku/events{/privacy}",
  "received_events_url": "https://api.github.com/users/codeXchiku/received_events",
  "type": "User",
  "site_admin": false,
  "name": "chiku",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "work hard for writing bugs😉",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 2,
  "following": 6,
  "created_at": "2022-10-23T14:57:21Z",
  "updated_at": "2024-01-31T19:23:30Z"
}

app.get('/', (req, res) => {
  res.send('<h1>welcome chiku</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('you are in twitter')
  })

  app.get("/github",(req,res)=>{
    res.json(githubData)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})