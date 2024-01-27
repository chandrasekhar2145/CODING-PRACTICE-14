// Write your code here
import {Component} from 'react'

import './index.css'

const headsCoinURL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsCoinURL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImg: headsCoinURL, headsCoin: 0, tailsCoin: 0}

  onChangeCoinsToss = () => {
    const {headsCoin, tailsCoin} = this.state
    const tossCoin = Map.floor(Map.random() * 2)
    let tossImg = ''
    let updateHeadsCoin = headsCoin
    let updateTailsCoin = tailsCoin

    if (tossCoin === 0) {
      tossImg = headsCoinURL
      updateHeadsCoin += 1
    } else {
      tossImg = tailsCoinURL
      updateTailsCoin += 1
    }
    this.setState({
      tossResultImg: tossImg,
      headsCoin: updateHeadsCoin,
      tailsCoin: updateTailsCoin,
    })
  }

  render() {
    const {tossResultImg, headsCoin, tailsCoin} = this.state
    const totalCount = headsCoin + tailsCoin
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="toss-result" />
          <button
            type="button"
            className="coin-button"
            onClick={this.onChangeCoinsToss}
          >
            Toss Coin
          </button>

          <div className="coin-container-2">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCoin}</p>
            <p className="count">Tails:{tailsCoin}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
