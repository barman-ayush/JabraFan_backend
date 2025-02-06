"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'sportradar-cricket/unknown (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Provides schedule information for all matches played on a given day.
     *
     * @summary Daily Schedule
     */
    SDK.prototype.cricketDailySchedule = function (metadata) {
        return this.core.fetch('/{language_code}/schedules/{date}/schedule.{format}', 'get', metadata);
    };
    /**
     * Provides a summary of all matches played on a given day.
     *
     * @summary Daily Results
     */
    SDK.prototype.cricketDailyResults = function (metadata) {
        return this.core.fetch('/{language_code}/schedules/{date}/results.{format}', 'get', metadata);
    };
    /**
     * Provides scheduled match information for all matches being played live.
     *
     * @summary Daily Live Schedule
     */
    SDK.prototype.cricketDailyLiveSchedule = function (metadata) {
        return this.core.fetch('/{language_code}/schedules/live/schedule.{format}', 'get', metadata);
    };
    /**
     * Provides lineups and batting order for a given match.
     *
     * @summary Match Lineups
     */
    SDK.prototype.cricketMatchLineups = function (metadata) {
        return this.core.fetch('/{language_code}/matches/{match_id}/lineups.{format}', 'get', metadata);
    };
    /**
     * Provides real-time match-level statistics and a play-by-play event timeline for a given
     * match. This includes player and team stats, scoring info, batting and bowling
     * parameters, and human-readable event descriptions. Please note that data returned is
     * determined by coverage level.
     *
     * @summary Match Timeline
     */
    SDK.prototype.cricketMatchTimeline = function (metadata) {
        return this.core.fetch('/{language_code}/matches/{match_id}/timeline.{format}', 'get', metadata);
    };
    /**
     * Provides real-time match-level statistics for a given match. Including results and
     * player and team stats. Please note that data returned is determined by coverage level.
     *
     * @summary Match Summary
     */
    SDK.prototype.cricketMatchSummary = function (metadata) {
        return this.core.fetch('/{language_code}/matches/{match_id}/summary.{format}', 'get', metadata);
    };
    /**
     * Provides match info and statistics for the past 10 matches for a given team.
     *
     * @summary Team Results
     */
    SDK.prototype.cricketTeamResults = function (metadata) {
        return this.core.fetch('/{language_code}/teams/{team_id}/results.{format}', 'get', metadata);
    };
    /**
     * Provides previous and upcoming meetings between two teams including results.
     *
     * @summary Team Versus Team
     */
    SDK.prototype.cricketTeamVersusTeam = function (metadata) {
        return this.core.fetch('/{language_code}/teams/{team_id}/versus/{team_id2}/matches.{format}', 'get', metadata);
    };
    /**
     * Provides player information, including current and historical team membership info, and
     * statistics broken down by match format.
     *
     * @summary Player Profile
     */
    SDK.prototype.cricketPlayerProfile = function (metadata) {
        return this.core.fetch('/{language_code}/players/{player_id}/profile.{format}', 'get', metadata);
    };
    /**
     * Provides match schedule information for a given team.
     *
     * @summary Team Schedule
     */
    SDK.prototype.cricketTeamSchedule = function (metadata) {
        return this.core.fetch('/{language_code}/teams/{team_id}/schedule.{format}', 'get', metadata);
    };
    /**
     * Provides a list of all available Cricket Tours.
     *
     * @summary Tour List
     */
    SDK.prototype.cricketTourList = function (metadata) {
        return this.core.fetch('/{language_code}/tours.{format}', 'get', metadata);
    };
    /**
     * Provides team information and statistics by season.
     *
     * @summary Team Profile
     */
    SDK.prototype.cricketTeamProfile = function (metadata) {
        return this.core.fetch('/{language_code}/teams/{team_id}/profile.{format}', 'get', metadata);
    };
    /**
     * Provides a list of all available Cricket Tours.
     *
     * @summary Tournament List
     */
    SDK.prototype.cricketTournamentList = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments.{format}', 'get', metadata);
    };
    /**
     * Provides information for a given tournament or season, including current season,
     * participating teams, and tournament structure.
     *
     * @summary Tournament Info
     */
    SDK.prototype.cricketTournamentInfo = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_id}/info.{format}', 'get', metadata);
    };
    /**
     * Provides results for all matches within a given tournament or season.
     *
     * @summary Tournament Results
     */
    SDK.prototype.cricketTournamentResults = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_id}/results.{format}', 'get', metadata);
    };
    /**
     * Provides a list of current and past season IDs for a given tournament. Season IDs can be
     * interchanged with tournament IDs to retrieve historical data.
     *
     * @summary Tournament Seasons
     */
    SDK.prototype.cricketTournamentSeasons = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_id}/seasons.{format}', 'get', metadata);
    };
    /**
     * Provides scheduling information for all matches within a given tournament or season.
     *
     * @summary Tournament Schedule
     */
    SDK.prototype.cricketTournamentSchedule = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_id}/schedule.{format}', 'get', metadata);
    };
    /**
     * Provides detailed standings info for a given season.
     *
     * @summary Tournament Standings
     */
    SDK.prototype.cricketTournamentStandings = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_id}/standings.{format}', 'get', metadata);
    };
    /**
     * This endpoint retrieves the Match Timeline delta. During a live match, the timeline
     * delta provides all the same data as the match timeline feed, but in 5-minute increments.
     *
     * @summary Match Timeline Delta
     */
    SDK.prototype.cricketMatchTimelineDelta = function (metadata) {
        return this.core.fetch('/{language_code}/matches/{match_id}/timeline/delta.{format}', 'get', metadata);
    };
    /**
     * Provides leaders in a given tournament or season for a variety of stats including top
     * runs, top average, top wickets, top bowling average, top economy, and top catches.
     *
     * @summary Tournament Leaders
     */
    SDK.prototype.tournamentLeaders = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_or_season_id}/leaders.{format}', 'get', metadata);
    };
    /**
     * Provides squad lineups for a given tournament or season.
     *
     * @summary Tournament Squads
     */
    SDK.prototype.tournamentSquads = function (metadata) {
        return this.core.fetch('/{language_code}/tournaments/{tournament_id}/teams/{competitor_id}/squads.{format}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
