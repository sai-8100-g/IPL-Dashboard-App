import './index.css'

const RecentMatches = props => {
  const {listItem} = props
  const {matchStatus, competingTeam, competingTeamLogo, venue} = listItem
  const statusColor = matchStatus === 'Lost' ? 'red' : 'green'
  return (
    <li className="matchCardItem">
      <div className="mathCardLogo">
        <img src={competingTeamLogo} alt={competingTeam} />
      </div>
      <h1 className="teamName">{competingTeam}</h1>
      <p className="venue">{venue}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default RecentMatches
