/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */

import { IClassification, IMatchesWithsForeach, ITeam } from '../interfaces';
import matchesServiceSearched from '../service/matchesServiceSearched';
import Team from '../database/models/teams';

async function generalClassification():
Promise<IClassification> {
  const allMatches: IMatchesWithsForeach = await matchesServiceSearched(false);
  const teamClassification: ITeam[] = (await Team.findAll());

  const classificationHomeTable: IClassification[] = [];

  teamClassification.forEach(async (team) => {
    let pontos = 0;
    let goalsPro = 0;
    let goalsContra = 0;
    let SaldoDeGols = 0;
    let jogos = 0;
    let derrotas = 0;
    let aproveitamento = 0;
    let vitorias = 0;
    let empate = 0;

    allMatches.forEach(async (match) => {
      if (team.id === match.awayTeam) {
        if (match.awayTeamGoals > match.homeTeamGoals) {
          pontos += 3;
          vitorias += 1;
        }

        if (match.homeTeamGoals === match.awayTeamGoals) {
          pontos += 1;
          empate += 1;
        }
        if (match.awayTeamGoals < match.homeTeamGoals) {
          derrotas += 1;
        }

        goalsPro += match.awayTeamGoals;
        goalsContra += match.homeTeamGoals;
        jogos += 1;
      }
      if (team.id === match.homeTeam) {
        if (match.homeTeamGoals > match.awayTeamGoals) {
          pontos += 3;
          vitorias += 1;
        }

        if (match.homeTeamGoals === match.awayTeamGoals) {
          pontos += 1;
          empate += 1;
        }
        if (match.homeTeamGoals < match.awayTeamGoals) {
          derrotas += 1;
        }

        goalsPro += match.homeTeamGoals;
        goalsContra += match.awayTeamGoals;
        jogos += 1;
      }
      SaldoDeGols = goalsPro - goalsContra;
      aproveitamento = (pontos / (jogos * 3)) * 100;
    });

    classificationHomeTable.push({
      id: team.id as number,
      name: team.teamName as string,
      totalPoints: pontos,
      totalGames: jogos,
      totalVictories: vitorias,
      totalDraws: empate,
      totalLosses: derrotas,
      goalsFavor: goalsPro,
      goalsOwn: goalsContra,
      goalsBalance: SaldoDeGols,
      efficiency: aproveitamento.toFixed(2) as unknown as number,

    });
  });

  classificationHomeTable.sort((a, b) =>
    (b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn
    ));
  return classificationHomeTable as unknown as IClassification;
}

export default generalClassification;
