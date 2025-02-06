const express = require('express')
const ServerConfig = require('../../configs/server_config.json')
const DataFetcher = require('../services/cricket_services/data_fetcher')
const LiveMatchQuestionGenerator = require('../services/contest_services/contest_generator')

async function server() {
    let app = express()
    let host = ServerConfig.host
    let port = process.env.PORT || ServerConfig.port
  
    let link = `http://${host}:${port}`

    app.get('/', (req, res) => res.send('Hello World!'))
    app.get('/health', (req, res) => res.send('Server is healthy!'))

    app.get('/daily-live-schedule',(req,res)=>{
        const dataFetcher = new DataFetcher()
        dataFetcher.getDailyLiveSchedule()
        .then((response)=>{
            res.send(response)
        })
        .catch((error)=>{
            res.statusCode = 500
            res.send(error)
        })
    })

    app.get('/match-info/:matchId',(req,res)=>{
        const dataFetcher = new DataFetcher()
        dataFetcher.getMatchInfo(req.params.matchId)
        .then((response)=>{
            res.send(response)
        })
        .catch((error)=>{
            res.statusCode = 500
            res.send(error)
        })
    })

    app.get('/generate-contest',async (req,res)=>{
        try {
            const liveMatchQuestionGenerator = new LiveMatchQuestionGenerator()
            let questions = await liveMatchQuestionGenerator.generateQuestions(req.query.match_id, req.query.no_of_questions)
            res.send(questions)
        } catch (error) {
            console.log(error)
            res.statusCode = 500
            res.send(error)

        }
    })

    app.listen(port, host, () => {
        console.log(`Server is running on ${link}`)
    })
}

module.exports = { server }