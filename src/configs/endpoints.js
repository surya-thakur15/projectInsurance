let endpoints = {

  "env": "production",
  
  "dev": {
    "root": "http://localhost:5000",
    "getAll": "/policy",
    "getOne": "/policy/data",
    "updatePolicy": "/policy/update",
    "getGraph": "/policy/graph"
  },

  "production": {
    "root": "http://api.suryathakur.com",
    "getAll": "/policy",
    "getOne": "/policy/data",
    "updatePolicy": "/policy/update",
    "getGraph": "/policy/graph"
  }
  
}

export default endpoints;