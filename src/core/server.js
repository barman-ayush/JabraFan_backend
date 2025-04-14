const express = require("express");
const cors = require("cors");
const ServerConfig = require("../../configs/server_config.json");
const DataFetcher = require("../services/cricket_services/data_fetcher");
const LiveMatchQuestionGenerator = require("../services/contest_services/contest_generator");

async function server() {
  let app = express();
  let host = ServerConfig.host;
  let port = process.env.PORT || ServerConfig.port;

  let link = `http://${host}:${port}`;

  // Enable CORS for all origins
  app.use(
    cors({
    //   origin: "https://jabra-fan.vercel.app/",
      origin: ["http://localhost:3001" , "http://localhost:3001/"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.get("/", (req, res) => {
    return res.send("Jabra Fan AI Service");
  });
  app.get("/health", (req, res) => res.send("Server is healthy!"));

  app.get("/get-display-score/:matchId", (req, res) => {
    console.log("Hit Here")
    const dataFetcher = new DataFetcher();
    dataFetcher
      .getDisplayScore(req.params.matchId)
      .then((response) => {
        // console.log(response)
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  });
  app.get("/live/:matchId", (req, res) => {
    console.log("[ LIVE/:MATCHID ] : ");
    const dataFetcher = new DataFetcher();
    dataFetcher
      .getLiveScore(req.params.matchId)
      .then((response) => {
        // console.log(response)
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  });

  app.get("/daily-live-schedule", (req, res) => {
    const dataFetcher = new DataFetcher();
    console.log("DAILYSCHEDULE");
    dataFetcher
      .getDailyLiveSchedule()
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  });

  app.get("/match-info/:matchId", (req, res) => {
    console.log(req.params.matchId)
    const dataFetcher = new DataFetcher();
    dataFetcher
      .getMatchInfo(req.params.matchId)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  });

  app.get("/generate-contest", async (req, res) => {
    try {

      const liveMatchQuestionGenerator = new LiveMatchQuestionGenerator();
      let questions = await liveMatchQuestionGenerator.generateQuestions(
        req.query.match_id,
        req.query.no_of_questions
      );
      // questions  => [ Array Of Strings(Each string has a question ) ]
      res.send(questions);
    } catch (error) {
      // console.log(error)
      console.log("Error Caught");
      res.statusCode = 500;
      res.send(error);
    }
  });

  app.listen(port, host, () => {
    console.log(`Server is running on ${link}`);
  });
}

module.exports = { server };
