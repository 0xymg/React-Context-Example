import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const {url} = useParams();
  return (
    <div>{url}</div>
  )
}

export default Post