const sportradarCricket = require("@api/sportradar-cricket");
const MatchData = require("../../../utils/team");
require("dotenv").config();

class DataFetcher {
  constructor() {
    sportradarCricket.auth(process.env.SPORTS_API_KEY);
  }

  async getDailyLiveSchedule() {
    try {
      var response = await sportradarCricket.cricketDailyLiveSchedule({
        language_code: "en",
        format: "json",
      });
      console.log("[ MATCH_DATAS ] : ", response);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getDailyUpcomingMatches() {
    try {
      var currentTimeStamp = new Date();
      var currentTimeString = currentTimeStamp.toISOString().substring(0, 10);
      var apiResponse = await sportradarCricket.cricketDailySchedule({
        language_code: "en",
        date: currentTimeString,
        format: "json",
      });
      let response = {};
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getMatchInfo(matchId) {
    try {
      var response = await sportradarCricket.cricketMatchTimeline({
        language_code: "en",
        match_id: matchId,
        format: "json",
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getDisplayScore(matchId) {
    try {
      const matchInfo = await this.getMatchInfo(matchId);
      console.log(matchInfo)

      return matchInfo;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getLiveScore(matchId) {
    try {
      const matchInfo = await this.getMatchInfo(matchId);
      const teamObj = new MatchData(matchInfo.data.sport_event.competitors);
      await teamObj.evaluate(matchInfo.data.sport_event_status);
      const { team1, team2 } = teamObj;
      return { team1, team2 };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = DataFetcher;
