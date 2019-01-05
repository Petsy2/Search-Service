module.exports = {
  apps: [
    {
      name: "ServiceS",
      script: "./Server/server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-52-206-107-252.compute-1.amazonaws.com",
      key: "~/.ssh/petsyRecommends.pem",
      ref: "origin/master",
      repo: "https://github.com/ByeEric/ServiceS.git",
      path: "/home/ubuntu/recommendsAPI",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
