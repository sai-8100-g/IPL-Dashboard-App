import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    result,
  } = latestMatchDetails

  return (
    <div className="latestMatchCard">
      <div className="matchInfo1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="competingTeamLogo">
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div className="matchInfo2">
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
        </div>
        <div>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
        </div>
        <div>
          <p>Man of the Match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div>
          <p>umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
