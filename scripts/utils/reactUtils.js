import React from 'react'

function filterChildren(children,props){
    return React.Children.map(children,
        child => React.cloneElement(child, {...props})
       )
}
export{filterChildren}