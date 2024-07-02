import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplTeamsCardList: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getMatchCardDetails()
  }

  getMatchCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonObj = await response.json()
    const {teams} = jsonObj
    const updatedData = teams.map(eachObj => ({
      name: eachObj.name,
      id: eachObj.id,
      teamImageUrl: eachObj.team_image_url,
    }))

    this.setState({iplTeamsCardList: updatedData, isLoader: false})
  }

  render() {
    const {iplTeamsCardList, isLoader} = this.state
    return (
      <div className="iplDashboard">
        <div className="dashboardImgHeading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logoImg"
          />
          <h1 className="dashboardHeading">IPL Dashboard</h1>
        </div>
        <div className="lowerDashboard">
          {isLoader ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="cardsUl">
              {iplTeamsCardList.map(eachObj => (
                <TeamCard teamItem={eachObj} key={eachObj.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
