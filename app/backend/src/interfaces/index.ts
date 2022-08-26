export interface IUser {
  email: string,
  password?: string,
}
export interface Attributes extends IUser {
  id: number,
  username: string,
  role: string
}

export interface IData{

  payload: {
    id: number,
    username: string,
    role: string,
    email: string,
    password?: string,

  },
  iat: 1661274557,
  exp: 1661360957

}

export interface ITeams {
  teams: {
    dataValues:{
      id: number,
      teamName: string
    }
  }
}

export interface ITeam {
  id: number,
  teamName: string
}

export interface IMatches {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }[]

}
