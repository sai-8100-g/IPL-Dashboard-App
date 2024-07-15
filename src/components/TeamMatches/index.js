import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import RecentMatches from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: [],
    latestMatchDetails: [],
    recentMatches: [],
    isLoader: true,
    teamId: '',
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getMatchDetails(id)
  }

  getMatchDetails = async id => {
    this.setState({teamId: id})
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonObj = await response.json()
    const updatedJsonList = {
      teamBannerUrl: jsonObj.team_banner_url,
      latestMatchDetails: jsonObj.latest_match_details,
      recentMatches: jsonObj.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedJsonList
    console.log(recentMatches, latestMatchDetails, teamBannerUrl)
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches.map(eachObj => ({
      umpires: eachObj.umpires,
      result: eachObj.result,
      manOfTheMatch: eachObj.man_of_the_match,
      id: eachObj.id,
      date: eachObj.date,
      venue: eachObj.venue,
      competingTeam: eachObj.competing_team,
      competingTeamLogo: eachObj.competing_team_logo,
      firstInnings: eachObj.first_innings,
      secondInnings: eachObj.second_innings,
      matchStatus: eachObj.match_status,
    }))

    this.setState({
      bannerUrl: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoader: false,
    })
  }

  getTeamColorClass = () => {
    const {teamId} = this.state
    console.log(teamId)
    switch (teamId) {
      case 'SRH':
        return 'srh'
      case 'RR':
        return 'rr'
      case 'KKR':
        return 'kkr'
      case 'CSK':
        return 'csk'
      case 'KXP':
        return 'pbks'
      case 'MI':
        return 'mi'
      case 'RCB':
        return 'rcb'
      case 'DC':
        return 'dc'
      default:
        return null
    }
  }

  render() {
    const {recentMatches, latestMatchDetails, bannerUrl, isLoader} = this.state
    const color = this.getTeamColorClass()
    console.log(color)
    return (
      <div className={`matchCard ${color}`}>
        {isLoader ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className={`matchCard ${color}`}>
            <div className="bannerCard">
              <img src={bannerUrl} alt="team banner" />
            </div>
            <div className="latestParaCard">
              <p>Latest Match</p>
            </div>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="teamMatchUl">
              {recentMatches.map(eachObj => (
                <RecentMatches listItem={eachObj} key={eachObj.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
