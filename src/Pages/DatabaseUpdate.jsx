import React from 'react'
import PageTemplate from '../Template/PageTemplate'
import data from '../PageContent/Database.json'

const DatabaseUpdate = () => {
  return (
    <PageTemplate 
        Title = {data.Title}
        Notes = {data.Notes}
        Details = {data.Details}
        PrevDetails = {data.PrevDetails}
        MainLink = {data.MainLink}
        OtherLinks = {data.OtherLinks}
        />
  )
}
export default DatabaseUpdate