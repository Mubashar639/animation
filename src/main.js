import React from 'react'
import ReactPageScroller from "react-page-scroller";



export default () => {
    const goToPage = (pageNumber) => {
        reactPageScroller.goToPage(pageNumber);
    }
    return (
        <div>
            <ReactPageScroller ref={c => reactPageScroller = c}>
                <div>
                    thisd;klfjs
               </div>
                <div>
                    thisd;klfjs
               </div>
                <div>
                    thisd;klfjs
               </div>
            </ReactPageScroller>
        </div>
    )
}
