const sportradarCricket = require('@api/sportradar-cricket');

class DataFetcher{

    constructor(){
        sportradarCricket.auth('PTfdyAvzT2hZ0F8GAM2vGVPWPaHZEUqWy4kpBYz3')
    }

    async getDailyLiveSchedule(){
        try {
           var response = await sportradarCricket.cricketDailyLiveSchedule({language_code: 'en', format: 'json'})
           return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async getDailyUpcomingMatches(){
        try{
            var currentTimeStamp = new Date()
            var currentTimeString = currentTimeStamp.toISOString().substring(0,10)
            var apiResponse = await sportradarCricket.cricketDailySchedule({language_code: 'en', date: currentTimeString, format: 'json'})
            let response = {}
            // for(let value in apiResponse.)
        } catch(error){
            console.error(error)
            return error
        }
    }

    async getMatchInfo(matchId){
        try {
            var response = await sportradarCricket.cricketMatchTimeline({language_code: 'en', match_id: matchId, format: 'json'})
            return response
        } catch (error) {
            console.error(error)
            return error            
        }
    }
}



module.exports = DataFetcher

