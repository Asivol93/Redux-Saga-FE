import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getArtists } from 'redux/reducers/artists';

const AllArtists = () => {
  const dispatch = useDispatch()

  const artists = useSelector((state) => state.artists.artists)
  console.log(artists)

  useEffect(() => {
    dispatch(getArtists())
  }, [dispatch])

  return (
    <div>
      {artists?.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <h2>{item.reknown}</h2>
          <p>{item.bio}</p>
          <img src={item.image} alt="artist profile" />
        </div>
      ))}

    </div>
  )
}

export default AllArtists