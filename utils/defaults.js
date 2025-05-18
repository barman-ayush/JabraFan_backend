export const sampleMatchHeadline = {
  match_number: 42,
  date: "2025-04-15",
  teams: {
    team1: "Mumbai",
    team2: "Chennai",
  },
  result: "Mumbai won by 5 wickets",
  headline: "Rohit, Bumrah shine as Mumbai clinch thriller",
  details:
    "A tight finish saw Rohit anchor the chase and Bumrah deliver key overs.",
  key_performers: {
    Mumbai: [
      { player: "Rohit Sharma", performance: "68 (45)" },
      { player: "Jasprit Bumrah", performance: "3/21" },
    ],
    Chennai: [{ player: "Ruturaj Gaikwad", performance: "55 (38)" }],
  },
  venue: "Wankhede Stadium",
};
export const sampleWeeklyUpdatesData = {
  ipl_updates_last_week: [
    {
      date: "2025-05-10",
      update: "Player ABC delivered a match-winning performance in a crucial chase.",
    },
    {
      date: "2025-05-12",
      update: "Team XYZ defended a low total with an exceptional bowling display.",
    },
    {
      date: "2025-05-14",
      update: "A thrilling last-over finish helped Team PQR secure a playoff spot.",
    },
  ],
};
export const sampleRisingPlayers = [
  {
    name: "Aryan Singh",
    role: "Batsman",
    last_week_performances: [
      { match: "Match 1", runs: 78, balls: 52, note: "Crucial knock under pressure" },
      { match: "Match 2", runs: 45, balls: 30 },
      { match: "Match 3", runs: 0, balls: 1, note: "Golden duck" },
    ],
  },
  {
    name: "Ravi Verma",
    role: "Bowler",
    last_week_performances: [
      { match: "Match 1", wickets: 3, economy: 5.2, note: "Match-winning spell" },
      { match: "Match 2", wickets: 1, economy: 7.8 },
      { match: "Match 3", wickets: 2, economy: 6.0 },
    ],
  },
  {
    name: "Kunal Joshi",
    role: "All-Rounder",
    last_week_performances: [
      { match: "Match 1", runs: 36, balls: 25, wickets: 1, economy: 6.7 },
      { match: "Match 2", runs: 10, balls: 12, wickets: 2, economy: 5.4 },
      { match: "Match 3", wickets: 0, economy: 9.5, note: "Expensive over in the end" },
    ],
  },
];


