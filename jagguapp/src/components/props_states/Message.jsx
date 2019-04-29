import React from 'react'

export const Message = (props) => {
    return(
        <div>
            <h3 className="bg-danger text-primary"></h3>
            <marquee className="bg-danger">{props.data}</marquee>
        </div>
    )
}
