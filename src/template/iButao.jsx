import React from 'react'
import IfTest from '../ultils/ultil'

export default props => (

        <IfTest test={!props.hide}>
                <form > 
                <button className={'btn btn-' + props.style} 
                        onClick={props.onClick}>
                        <i className={ 'fa fa-'+props.icon}>
                       
                        </i>
                </button>
                </form>
        </IfTest>
        )
     
    
