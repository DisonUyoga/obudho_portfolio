import {useMap, useMapEvent} from 'react-leaflet'


import React,{useEffect} from 'react';

const RecenterAutomatically = ({lat,lng}) => {
  const map=useMap()
  useEffect(()=>{
    map.setView([lat,lng])
  },[lat,lng, map])
  return null
}

export default RecenterAutomatically;
