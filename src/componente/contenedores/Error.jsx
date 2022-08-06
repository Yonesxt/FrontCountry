import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {

  return (
    <div>
      <Link to='/'>
        <button>
          Back to home
        </button>
      </Link>
      <h1>
        Oops.. Error 404, page not found
      </h1>
    </div>
  )
}
