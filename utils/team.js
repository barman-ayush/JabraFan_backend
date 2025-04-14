class MatchData {
  team1;
  team2;

  // choice -> 0 (batting first) , 1 (batting second)
  constructor(competitors) {
    this.team1 = competitors[0];
    this.team2 = competitors[1];
  }

  async evaluate(sport_event_status) {
    console.log("[ EVALUATE ]", sport_event_status.period_scores);
    const tossWinner = sport_event_status.toss_won_by,
      tossDecision = sport_event_status.toss_decision;
    this.team1.choice = this.team2.choice = 0;
    
    // console.log(this.team1.id , tossWinner , this.team1.id === tossWinner , this.team1.id === tossWinner)
    if (this.team1.id === tossWinner)
      this.team1.choice = tossDecision == "bowl" ? 1 : 0;
    else this.team1.choice = tossDecision == "bowl" ? 0 : 1;
    
    this.team2.choice = (this.team1.choice + 1)%2;


    
    this.team1.score = (this.team1.choice <= sport_event_status.period_scores.length - 1) ? 
      sport_event_status.period_scores[this.team1.choice].display_score : undefined;
    this.team2.score = (this.team2.choice <= sport_event_status.period_scores.length - 1) ? 
      sport_event_status.period_scores[this.team2.choice].display_score : undefined;

}
}

module.exports = MatchData;

// {
    //     "id": "sr:competitor:877929",
    //     "name": "Lucknow Super Giants",
    //     "country": "India",
    //     "country_code": "IND",
//     "abbreviation": "LSG",
//     "qualifier": "home",
//     "gender": "male"
// },
