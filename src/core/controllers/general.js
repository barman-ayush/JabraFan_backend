const DataFetcher = require("../../services/cricket_services/data_fetcher");

module.exports = {
  getDailySchedule: (req, res) => {
    DataFetcher.getDailyLiveSchedule()
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.send(error);
      });
  },
};
