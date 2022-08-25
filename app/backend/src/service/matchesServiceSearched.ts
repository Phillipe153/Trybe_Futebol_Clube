import { Op } from 'sequelize';
import { IMatches } from '../interfaces';
import Matches from '../database/models/matches';
import Team from '../database/models/teams';

async function matchesServiceSearched(q: boolean)
  :Promise<{ status: number, allMatches: IMatches }> {
  console.log('q: ', typeof q);

  const allMatches: IMatches = await Matches.findAll({ where:
    { inProgress: { [Op.is]: q } as any },
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
    } }],
  }) as unknown as IMatches;
  return { status: 200, allMatches };
}
export default matchesServiceSearched;
