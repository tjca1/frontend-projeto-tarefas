import React from 'react'
import IfTest from '../ultils/ultil'

export default props => (

        <IfTest test={!props.hide}>
             <div>
                <button className={'btn btn-' + props.style}
                        onClick={props.onClick}>
                        <i className={ 'fa fa-'+props.icon}/>
                </button>
            </div>
        </IfTest>
        )
     
    
