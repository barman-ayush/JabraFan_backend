const dataFetcherInstance = require("../cricket_services/data_fetcher");
const GeminiApiInstance = require("../gen_ai_services/gemini_api");

class Dugout {
  async getHeadlines(matchId) {
    const matchDataResponse = await dataFetcherInstance.getMatchInfo(matchId);
    console.log(" [ MATCH_DATA_RESPONSE ] : ", matchDataResponse.data);
    const headlineResponse = await GeminiApiInstance.getAiGeneratedHeadlines(
      matchDataResponse.data
    );
    console.log(" [ MATCH_DATA_HEADLINE ] : ", headlineResponse);
    return headlineResponse;
  }

  async getWeeklyUpdates(weekDataInJsonString) {
    const weeklyUpdates = await GeminiApiInstance.getAigeneratedWeeklyUpdates(
      weekDataInJsonString
    );
    return weeklyUpdates;
  }

  async getRisingStarsForThisWeek(weekDataInJsonString) {
    const weeklyDataObjArray = JSON.parse(weekDataInJsonString);
    const combinedKeyPerformers = this.fetchKeyPerformances(weeklyDataObjArray);
    const risingStarJson = await GeminiApiInstance.getRisingStarDataForWeek(
      combinedKeyPerformers
    );
    console.log(" [ MATCH_DATA_HEADLINE ] : ", risingStarJson);
    return risingStarJson;
  }

  fetchKeyPerformances(weeklyDataObjArray) {
    const combinedKeyPerformers = weeklyDataObjArray.reduce((acc, match) => {
      for (const team in match.key_performers) {
        if (!acc[team]) {
          acc[team] = [];
        }
        acc[team].push(...match.key_performers[team]);
      }
      return acc;
    }, {});

    return combinedKeyPerformers;
  }
}

const DugoutInstance = new Dugout();
Object.freeze(DugoutInstance); // Optional: prevents modification of the singleton

module.exports = DugoutInstance;
