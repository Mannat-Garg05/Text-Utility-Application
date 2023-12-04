import React from 'react'
import PropTypes from 'prop-types'
function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    <div className="alert alert-warning alert-dismissible fade show" role="alert" >
    {/* <strong>{props.Alert.type}</strong>: {props.Alert.message} */}
<button type="button" classNmae="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{float:'right'}}>X</button>
  </div>
  </div>
  )
}

export default Alert
