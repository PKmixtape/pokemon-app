import React, { useState } from 'react'
import axios from 'axios'


export default function PokeImage({url})
{
    const [imgurl, setImgurl] = useState()
    axios.get(url).then(res =>{
        setImgurl(res.data.sprites.front_default)
    })

  return (
    <img src={imgurl}/>
  )
}
