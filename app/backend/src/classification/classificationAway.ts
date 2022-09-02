/* eslint-disable max-lines-per-function */

import { Request, Response, NextFunction } from 'express';

import { IClassification, IMatchesWithsForeach } from '../interfaces';
import Classification from '../database/models/classification';
import matchesServiceSearched from '../service/matchesServiceSearched';

export default async function classificationAway(_req: Request, _res: Response, next: NextFunction):
Promise<void> {
  const allMatches: IMatchesWithsForeach = await matchesServiceSearched(false);
  const teamClassification: IClassification[] = (await Classification.findAll());

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
        SaldoDeGols = goalsPro - goalsContra;
        jogos += 1;
        aproveitamento = (pontos / (jogos * 3)) * 100;
      }
    });

    await Classification.update(
      {
        totalPoints: pontos,
        totalGames: jogos,
        totalVictories: vitorias,
        totalDraws: empate,
        totalLosses: derrotas,
        goalsFavor: goalsPro,
        goalsOwn: goalsContra,
        goalsBalance: SaldoDeGols,
        efficiency: aproveitamento.toFixed(2),
      },
      { where: { id: team.id } },
    ) as unknown as IClassification;
  });
  next();
}
