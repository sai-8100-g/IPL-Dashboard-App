import {Link} from 'react-router-dom'

import './index.css'

const TeamCards = props => {
  const {teamItem} = props
  const {name, teamImageUrl, id} = teamItem
  return (
    <Link className="cardLink" to={`/ipl/${id}`}>
      <li className="cardItem">
        <img src={teamImageUrl} alt={name} className="teamImg" />
        <h1 className="teamName">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCards
