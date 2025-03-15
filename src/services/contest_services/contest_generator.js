const DataFetcher = require("../cricket_services/data_fetcher")
const GeminiApi =  require("../gen_ai_services/gemini_api")

class LiveMatchQuestionGenerator{

    getParsedMatchInfo(input){
        let parsedMatchInfo={};
        parsedMatchInfo.competitors = input.sport_event.competitors
        parsedMatchInfo.match_status = input.sport_event_status.match_status
        parsedMatchInfo.display_score = input.sport_event_status.display_score
        parsedMatchInfo.current_inning = input.sport_event_status.current_inning
        parsedMatchInfo.display_overs = input.sport_event_status.display_overs
        parsedMatchInfo.required_run_rate = input.sport_event_status.required_run_rate
        parsedMatchInfo.run_rate = input.sport_event_status.run_rate
        parsedMatchInfo.period_scores = input.sport_event_status.period_scores

        if(input.statistics.innings.length==2) parsedMatchInfo.statistics=input.statistics.innings[1]
        else parsedMatchInfo.statistics = input.statistics.innings[0]
        return parsedMatchInfo
    }

    async generateQuestions(matchId, noOfQuestions){
        const dataFetcher =  new DataFetcher()
        let response = await dataFetcher.getMatchInfo(matchId)
        // let parsedResponse = this.getParsedMatchInfo(response.data)
        let parsedResponse = response.data;
        const geminiApi = new GeminiApi()
        let finalResponse = await geminiApi.getAiGeneratedQuestions(parsedResponse, noOfQuestions)
        console.log("Final Response : " , finalResponse);
        return finalResponse
    }
    
}

module.exports = LiveMatchQuestionGenerator