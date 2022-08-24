import React from 'react'

export default function Pagination({goPrev,goNext}) {
  return (
    <div>
        {goPrev &&<button onClick={goPrev}>Prev</button>}
        {goNext &&<button onClick={goNext}>Next</button>}
    </div>


  )
}
