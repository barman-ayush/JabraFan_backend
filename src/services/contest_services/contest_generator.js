const DataFetcher = require("../cricket_services/data_fetcher");

class LiveMatchQuestionGenerator {
  getParsedMatchInfo(input) {
    const parsedMatchInfo = {
      competitors: input.sport_event.competitors,
      match_status: input.sport_event_status.match_status,
      display_score: input.sport_event_status.display_score,
      current_inning: input.sport_event_status.current_inning,
      display_overs: input.sport_event_status.display_overs,
      required_run_rate: input.sport_event_status.required_run_rate,
      run_rate: input.sport_event_status.run_rate,
      period_scores: input.sport_event_status.period_scores,
      statistics:
        input.statistics.innings.length === 2
          ? input.statistics.innings[1]
          : input.statistics.innings[0],
    };
    return parsedMatchInfo;
  }

  async generateQuestions(matchId, noOfQuestions) {
    try {
      const response = await DataFetcher.getMatchInfo(matchId);
      const parsedResponse = response.data; // or this.getParsedMatchInfo(response.data)
      // const finalResponse = await gemini.getAiGeneratedQuestions(parsedResponse, noOfQuestions);
      const finalResponse = await GeminiApiInstance
      console.log("Final Response:", finalResponse);
      return finalResponse;
    } catch (error) {
      console.error("Error generating questions:", error);
      return error;
    }
  }
}

// Create singleton instance
const liveMatchQuestionGeneratorInstance = new LiveMatchQuestionGenerator();
Object.freeze(liveMatchQuestionGeneratorInstance); // optional

module.exports = liveMatchQuestionGeneratorInstance;
