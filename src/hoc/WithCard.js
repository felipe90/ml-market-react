import React from 'react'

const WithCard = (props) => {
  return (
    <div
      className={[
        'p-shadow-3',
        'p-sm-12',
        'p-md-8',
        'p-lg-8',
        'p-sm-offset-0',
        'p-md-offset-2',
        'p-lg-offset-2',
        'p-p-0',
        props.className,
      ].join(' ')}
    >
      {props.children}
    </div>
  )
}

export default WithCard
