import React from 'react'
import {Details, OtherDetails, DownloadLink, OtherDownloadLinks, Notes} from './PageTemplateComponents'

const PageTemplate = ({Title , NoteList , DetailList , 
                    PrevDetailList , MainLinkURL , OtherLinksURL }) => {
    console.log(Notes)
    return (
    <div>
        <h3>{Title}</h3>
        {NoteList && <Notes Notes={NoteList}/>}
        {DetailList && <Details Details={DetailList}/>}
        {PrevDetailList && <OtherDetails PrevDetails={PrevDetailList} />}
        {MainLinkURL && <DownloadLink MainLink={MainLinkURL}/> }
        {OtherLinksURL && <OtherDownloadLinks OtherLinks={OtherLinksURL}/> }
    </div>
  )
}

export default PageTemplate