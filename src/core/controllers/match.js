const liveMatchQuestionGeneratorInstance = require("../../services/contest_services/contest_generator");
const dataFetcherInstance = require("../../services/cricket_services/data_fetcher");
const DugoutInstance = require("../../services/dugout_service/dugout");

module.exports = {
  getScore: (req, res) => {
    console.log("Hit Here");
    dataFetcherInstance
      .getDisplayScore(req.params.matchId)
      .then((response) => {
        // console.log(response)
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  },
  getLiveMatch: (req, res) => {
    console.log("[ LIVE/:MATCHID ] : ");
    dataFetcherInstance
      .getLiveScore(req.params.matchId)
      .then((response) => {
        // console.log(response)
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  },
  getMatchInfo: (req, res) => {
    console.log(req.params.matchId);
    dataFetcherInstance
      .getMatchInfo(req.params.matchId)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  },
  generateQuestions: async (req, res) => {
    try {
      let questions =
        await liveMatchQuestionGeneratorInstance.generateQuestions(
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
  },

  getHeadlinesForMatch: async (req, res) => {
    try {
      const headlines = await DugoutInstance.getHeadlines(req.params.matchId);
      console.log(req.params.matchId);
      const headlinesJSON = headlines.replace(/```json/g , "").replace(/```/g , "").trim()
      const headlinesObj = JSON.parse(headlinesJSON);
      res.send({headlines : headlinesObj});
    } catch (error) {
      // console.log(error)
      console.log("Error Caught");
      res.statusCode = 500;
      res.send(error);
    }
  },
};
