import {Link} from 'react-router-dom'

import './index.css'

const TeamCards = props => {
  const {teamItem} = props
  const {name, teamImageUrl, id} = teamItem
  return (
    <Link className="cardLink" to={`/team-matches/${id}`}>
      <li className="cardItem">
        <img src={teamImageUrl} alt={name} className="teamImg" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCards
