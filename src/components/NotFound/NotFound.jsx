import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const err = useRouteError();

  return (
    <div>
      <p>{err.status} - {err.statusText}</p>
    </div>
  )
}

export default NotFound
