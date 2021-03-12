import React from 'react'

const WithClass = (props) => {
  return <section className={props.className}>{props.children}</section>
}

export default WithClass;