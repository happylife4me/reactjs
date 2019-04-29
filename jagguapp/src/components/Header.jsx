import React from 'react'


// SFC --> State less Functional Component 
//old ES5 function style
/*
export function Header (props) {
    return(
        <div>
        <h2 className="text-info text-center">
            {props.title}
        </h2>
        </div>
    )
}
*/

// SFC --> State less Functional Component
//ES 6 Lamda style
export const Header =  (some) => {
    return(
        <div>
        <h2 className="text-info text-center">
            {some.title}
        </h2>
        </div>
    )
}

Header.defaultProps = {
    title: "Welcome to Verizon React Tranning"
}
