const { GoogleGenerativeAI } = require("@google/generative-ai");
const {
  sampleMatchHeadline,
  sampleRisingPlayers,
} = require("../../../utils/defaults");
require("dotenv").config();
class GeminiApi {
  model;

  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  generateFomattedResponse(unformattedResponse) {
    let formattedResponse = unformattedResponse.split("|");
    return formattedResponse;
  }

  async getAiGeneratedQuestions(parsedJson, noOfQuestions) {
    let prompt = `Below the status of a live match.\n\n ${JSON.stringify(
      parsedJson
    )} \n\n Now using the above data Generate ${noOfQuestions} non-numerical questions (like will 'Y' batsman score a six in last over or will 'X' bowler take some wicket in his last over, etc) based on future prediction of the current scenario. Give the answer in such a form that the questions altogether from a paragraph and each one is seperated from the other by '|' symbol"`;
    // let prompt2 = "Generate 5 quiz questions based on DialogFlow. Give the answer in such a form that the questions altogether from a paragraph and each one is seperated from the other by '|' symbol";
    const result = await this.model.generateContent(prompt);
    var responseText = result.response.text();
    let formattedResponse = this.generateFomattedResponse(responseText);
    return formattedResponse;
  }

  async getAiGeneratedHeadlines(parsedJson) {
    const sampleMatchHeadlineJsonString = JSON.stringify(sampleMatchHeadline);
    let prompt = `Below the status of a live match.\n\n ${JSON.stringify(
      parsedJson
    )} \n\n 
        Now using the abova data generate the headline for this match so far 
        in the follwoing format 
        ${sampleMatchHeadlineJsonString}
        Return a JSON string only.
        `;
    const result = await this.model.generateContent(prompt);
    var responseText = result.response.text();
    return this.parseAiResponseJsonString(responseText);
  }

  parseAiResponseJsonString(AIResponse) {
    return AIResponse.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
  }

  async getAigeneratedWeeklyUpdates(weekDataInJsonString) {
    const sampleWeeklyUpdatesJsonString = JSON.stringify(
      sampleWeeklyUpdatesData
    );
    let prompt = `Below the status of a live match.\n\n ${JSON.stringify(
      weekDataInJsonString
    )} \n\n 
        Now using the abova data generate the weekly update for this week  
        in the follwoing format 
        ${sampleWeeklyUpdatesJsonString}
        Return a JSON string only.
        `;
    const result = await this.model.generateContent(prompt);
    var responseText = result.response.text();
    return this.parseAiResponseJsonString(responseText);
  }

  async getRisingStarDataForWeek(weeklyKeyPerformerDataJsonString) {
    const sampleWeeklyRisingStarJsonString =
      JSON.stringify(sampleRisingPlayers);
    let prompt = `Below the status of a live match.\n\n ${JSON.stringify(
      weeklyKeyPerformerDataJsonString
    )} \n\n 
        Now using the abova data generate the weekly update for this week  
        in the follwoing format 
        ${sampleWeeklyRisingStarJsonString}
        Here for match , use the match id
        Return a JSON string only.
        `;
    const result = await this.model.generateContent(prompt);
    var responseText = result.response.text();
    return this.parseAiResponseJsonString(responseText);
  }
}

const GeminiApiInstance = new GeminiApi();
Object.freeze(GeminiApiInstance);

module.exports = GeminiApiInstance;
