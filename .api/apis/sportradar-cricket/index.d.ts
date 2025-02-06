import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Provides schedule information for all matches played on a given day.
     *
     * @summary Daily Schedule
     */
    cricketDailySchedule(metadata: types.CricketDailyScheduleMetadataParam): Promise<FetchResponse<200, types.CricketDailyScheduleResponse200>>;
    /**
     * Provides a summary of all matches played on a given day.
     *
     * @summary Daily Results
     */
    cricketDailyResults(metadata: types.CricketDailyResultsMetadataParam): Promise<FetchResponse<200, types.CricketDailyResultsResponse200>>;
    /**
     * Provides scheduled match information for all matches being played live.
     *
     * @summary Daily Live Schedule
     */
    cricketDailyLiveSchedule(metadata: types.CricketDailyLiveScheduleMetadataParam): Promise<FetchResponse<200, types.CricketDailyLiveScheduleResponse200>>;
    /**
     * Provides lineups and batting order for a given match.
     *
     * @summary Match Lineups
     */
    cricketMatchLineups(metadata: types.CricketMatchLineupsMetadataParam): Promise<FetchResponse<200, types.CricketMatchLineupsResponse200>>;
    /**
     * Provides real-time match-level statistics and a play-by-play event timeline for a given
     * match. This includes player and team stats, scoring info, batting and bowling
     * parameters, and human-readable event descriptions. Please note that data returned is
     * determined by coverage level.
     *
     * @summary Match Timeline
     */
    cricketMatchTimeline(metadata: types.CricketMatchTimelineMetadataParam): Promise<FetchResponse<200, types.CricketMatchTimelineResponse200>>;
    /**
     * Provides real-time match-level statistics for a given match. Including results and
     * player and team stats. Please note that data returned is determined by coverage level.
     *
     * @summary Match Summary
     */
    cricketMatchSummary(metadata: types.CricketMatchSummaryMetadataParam): Promise<FetchResponse<200, types.CricketMatchSummaryResponse200>>;
    /**
     * Provides match info and statistics for the past 10 matches for a given team.
     *
     * @summary Team Results
     */
    cricketTeamResults(metadata: types.CricketTeamResultsMetadataParam): Promise<FetchResponse<200, types.CricketTeamResultsResponse200>>;
    /**
     * Provides previous and upcoming meetings between two teams including results.
     *
     * @summary Team Versus Team
     */
    cricketTeamVersusTeam(metadata: types.CricketTeamVersusTeamMetadataParam): Promise<FetchResponse<200, types.CricketTeamVersusTeamResponse200>>;
    /**
     * Provides player information, including current and historical team membership info, and
     * statistics broken down by match format.
     *
     * @summary Player Profile
     */
    cricketPlayerProfile(metadata: types.CricketPlayerProfileMetadataParam): Promise<FetchResponse<200, types.CricketPlayerProfileResponse200>>;
    /**
     * Provides match schedule information for a given team.
     *
     * @summary Team Schedule
     */
    cricketTeamSchedule(metadata: types.CricketTeamScheduleMetadataParam): Promise<FetchResponse<200, types.CricketTeamScheduleResponse200>>;
    /**
     * Provides a list of all available Cricket Tours.
     *
     * @summary Tour List
     */
    cricketTourList(metadata: types.CricketTourListMetadataParam): Promise<FetchResponse<200, types.CricketTourListResponse200>>;
    /**
     * Provides team information and statistics by season.
     *
     * @summary Team Profile
     */
    cricketTeamProfile(metadata: types.CricketTeamProfileMetadataParam): Promise<FetchResponse<200, types.CricketTeamProfileResponse200>>;
    /**
     * Provides a list of all available Cricket Tours.
     *
     * @summary Tournament List
     */
    cricketTournamentList(metadata: types.CricketTournamentListMetadataParam): Promise<FetchResponse<200, types.CricketTournamentListResponse200>>;
    /**
     * Provides information for a given tournament or season, including current season,
     * participating teams, and tournament structure.
     *
     * @summary Tournament Info
     */
    cricketTournamentInfo(metadata: types.CricketTournamentInfoMetadataParam): Promise<FetchResponse<200, types.CricketTournamentInfoResponse200>>;
    /**
     * Provides results for all matches within a given tournament or season.
     *
     * @summary Tournament Results
     */
    cricketTournamentResults(metadata: types.CricketTournamentResultsMetadataParam): Promise<FetchResponse<200, types.CricketTournamentResultsResponse200>>;
    /**
     * Provides a list of current and past season IDs for a given tournament. Season IDs can be
     * interchanged with tournament IDs to retrieve historical data.
     *
     * @summary Tournament Seasons
     */
    cricketTournamentSeasons(metadata: types.CricketTournamentSeasonsMetadataParam): Promise<FetchResponse<200, types.CricketTournamentSeasonsResponse200>>;
    /**
     * Provides scheduling information for all matches within a given tournament or season.
     *
     * @summary Tournament Schedule
     */
    cricketTournamentSchedule(metadata: types.CricketTournamentScheduleMetadataParam): Promise<FetchResponse<200, types.CricketTournamentScheduleResponse200>>;
    /**
     * Provides detailed standings info for a given season.
     *
     * @summary Tournament Standings
     */
    cricketTournamentStandings(metadata: types.CricketTournamentStandingsMetadataParam): Promise<FetchResponse<200, types.CricketTournamentStandingsResponse200>>;
    /**
     * This endpoint retrieves the Match Timeline delta. During a live match, the timeline
     * delta provides all the same data as the match timeline feed, but in 5-minute increments.
     *
     * @summary Match Timeline Delta
     */
    cricketMatchTimelineDelta(metadata: types.CricketMatchTimelineDeltaMetadataParam): Promise<FetchResponse<200, types.CricketMatchTimelineDeltaResponse200>>;
    /**
     * Provides leaders in a given tournament or season for a variety of stats including top
     * runs, top average, top wickets, top bowling average, top economy, and top catches.
     *
     * @summary Tournament Leaders
     */
    tournamentLeaders(metadata: types.TournamentLeadersMetadataParam): Promise<FetchResponse<200, types.TournamentLeadersResponse200>>;
    /**
     * Provides squad lineups for a given tournament or season.
     *
     * @summary Tournament Squads
     */
    tournamentSquads(metadata: types.TournamentSquadsMetadataParam): Promise<FetchResponse<200, types.TournamentSquadsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
