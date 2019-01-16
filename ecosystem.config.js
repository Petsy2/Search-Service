module.exports = {
  apps: [
    {
      name: "PetsyRecommends",
      script: "./Server/server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-234-245-254.compute-1.amazonaws.com",
      key: "~/.ssh/firstInstance.pem",
      ref: "origin/master",
      repo: "git@github.com:Michael-K-Oconnor/Search-Service.git",
      path: "/home/ubuntu/petsyRecommends",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
