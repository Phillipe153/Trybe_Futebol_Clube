import { Op } from 'sequelize';
import { IMatchesWithsForeach } from '../interfaces';
import Matches from '../database/models/matches';
import Team from '../database/models/teams';

async function matchesServiceSearched(q: boolean)
  :Promise< IMatchesWithsForeach > {
  const allMatches: IMatchesWithsForeach = await Matches.findAll({ where:
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
  }) as unknown as IMatchesWithsForeach;
  return allMatches;
}
export default matchesServiceSearched;
