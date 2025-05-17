const express = require("express");
const cors = require("cors");
const ServerConfig = require("../../configs/server_config.json");
const DataFetcher = require("../services/cricket_services/data_fetcher");
const LiveMatchQuestionGenerator = require("../services/contest_services/contest_generator");
const { getScore, getLiveMatch , getMatchInfo, generateQuestions, getHeadlinesForMatch } = require("./controllers/match");
const { getDailySchedule } = require("./controllers/general");

async function server() {
  let app = express();
  let host = ServerConfig.host;
  let port = process.env.PORT || ServerConfig.port;

  let link = `http://${host}:${port}`;

  // Enable CORS for all origins
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3000/",
        "https://www.jabrafans.com/",
        "https://www.jabrafans.com",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  // Testing Routes

  app.get("/", (req, res) => res.send("Jabra Fan AI Service"));

  app.get("/health", (req, res) => res.send("Server is healthy!"));

  // Generic Routes

  app.get("/daily-live-schedule", getDailySchedule);


  // Match Specific Routes

  app.get("/get-display-score/:matchId", getScore);

  app.get("/live/:matchId", getLiveMatch);
  
  app.get("/match-info/:matchId", getMatchInfo);
  
  app.get("/generate-contest", generateQuestions);
  
  app.get("/fetch-match-headline/:matchId", getHeadlinesForMatch);

  app.listen(port, host, () => {
    console.log(`Server is running on ${link}`);
  });
}

module.exports = { server };
