import { IMatches } from '../interfaces';
import Matches from '../database/models/matches';
import Team from '../database/models/teams';

export default async function matchesService():Promise<{ status: number, allMatches: IMatches }> {
  const allMatches: IMatches = await Matches.findAll({
    include: [{
      model: Team,
      as: 'teamHome',
      attributes: {
        exclude: ['id'],
      } },
    {
      model: Team,
      as: 'teamAway',
      attributes: {
        exclude: ['id'],
      },
    },
    ],
  }) as unknown as IMatches;

  return { status: 200, allMatches };
}
