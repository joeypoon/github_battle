var React = require('react');

function ConfirmBattle (props) {
  var ui = props.isLoading ? "Loading..." : "Confirm Battle!"
  return(
    <div>
      {ui}
    </div>
  )
}

module.exports = ConfirmBattle;
