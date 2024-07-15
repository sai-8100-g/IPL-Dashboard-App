import './index.css'

const RecentMatches = props => {
  const {listItem} = props
  const {
    matchStatus,
    competingTeam,
    competingTeamLogo,
    venue,
    result,
  } = listItem
  const statusColor = matchStatus === 'Lost' ? 'red' : 'green'
  return (
    <li className="matchCardItem">
      <div className="mathCardLogo">
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      </div>
      <p className="teamName">{competingTeam}</p>
      <p className="venue">{venue}</p>
      <p className={statusColor}>{matchStatus}</p>
      <p className={statusColor}>{result}</p>
    </li>
  )
}

export default RecentMatches
