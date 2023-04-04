import React from 'react'
import PageTemplate from '../Template/PageTemplate'
import data from '../PageContent/Database.json'

const DatabaseUpdate = () => {
  return (
    <PageTemplate 
        Title = {data.Title}
        NoteList = {data.Notes}
        DetailList = {data.Details}
        PrevDetailList = {data.PrevDetails}
        MainLinkURL = {data.MainLink}
        OtherLinksURL = {data.OtherLinks}
        />
  )
}
export default DatabaseUpdate