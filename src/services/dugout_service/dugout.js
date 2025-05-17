const dataFetcherInstance = require("../cricket_services/data_fetcher");
const GeminiApiInstance = require("../gen_ai_services/gemini_api");

class Dugout {
  async getHeadlines(matchId) {
    const matchDataResponse = await dataFetcherInstance.getMatchInfo(matchId);
    console.log( " [ MATCH_DATA_RESPONSE ] : " ,matchDataResponse.data);
    const headlineResponse = await GeminiApiInstance.getAiGeneratedHeadlines(matchDataResponse.data);
    console.log( " [ MATCH_DATA_HEADLINE ] : " ,headlineResponse);
    return headlineResponse;
    
  }

}

const DugoutInstance = new Dugout();
Object.freeze(DugoutInstance); // Optional: prevents modification of the singleton

module.exports = DugoutInstance;
