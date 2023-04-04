import React from 'react'
import {Details, OtherDetails, DownloadLink, OtherDownloadLinks, Notes} from './PageTemplateComponents'
import './PageTemplate.css'
const PageTemplate = ({Title , NoteList , DetailList , 
                    PrevDetailList , OtherLinksURL }) => {
    console.log(Notes)
    return (
    <div className='PageTemplate_Container'>
        <h3>{Title}</h3>
        {NoteList && <Notes Notes={NoteList}/>}
        {DetailList && <Details Details={DetailList}/>}
        {PrevDetailList && <OtherDetails PrevDetails={PrevDetailList} />}
        {OtherLinksURL && <OtherDownloadLinks OtherLinks={OtherLinksURL}/> }
    </div>
  )
}

export default PageTemplate