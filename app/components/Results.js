var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function Results(props) {
  if (props.isLoading) {
    return(
      <Loading />
    )
  }

  var tie = props.scores[0] === props.scores[1]
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  var losingIndex = winningIndex === 1 ? 0 : 1
  var winningHeader = tie ? 'Tie' : 'Winner'
  var losingHeader = tie ? 'Tie' : 'Loser'

  return(
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header={winningHeader}>
          <UserDetails info={props.playersInfo[winningIndex]}
                       score={props.scores[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header={losingHeader}>
          <UserDetails info={props.playersInfo[losingIndex]}
                       score={props.scores[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-12"
           style={styles.space}>
        <Link to='/playerOne'>
          <button type="button"
                  className="btn btn-lg btn-danger">
            Start Over
          </button>
        </Link>
      </div>
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
