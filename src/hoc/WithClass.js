import React from 'react'

const WithClass = (props) => {
  return <div className={props.className}>{props.children}</div>
}

export default WithClass;