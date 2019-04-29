import React from 'react'

// SFC --> State less Functional Component

/*
export function Footer(props) {
    return (
        <div>
            <h4 className="bg-warning text-center">
                Copyright reserved To VeriZon @ @ {props.year}, {props.month}
            </h4>
        </div>
    )
}
*/

export const Footer = (props) =>{
    return (
        <div>
            <h4 className="bg-warning text-center">
                Copyright reserved To VeriZon @ {props.year}, {props.month}
            </h4>
        </div>
    )
}







