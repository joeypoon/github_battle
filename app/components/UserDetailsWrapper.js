var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');

function UserDetailsWrapper(props) {
  return(
    <div className="col-sm-6">
      <p className="lead">Player {props.player}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  player: PropTypes.string
}

module.exports = UserDetailsWrapper;
