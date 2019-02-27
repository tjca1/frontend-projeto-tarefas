import React from 'react'
import Grid from '../template/grid'
import Butao from '../template/iButao'




export default props => (
     <div role='form' className='_form'>
         <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                   placeholder='Adicione Tarefa'
                   onChange={props.handleChange}
                   /> 
         
         </Grid>

         <Grid cols='12 3 2'>
            <Butao  style='primary' icon='plus' onClick={props.handleAdd}/>
         </Grid>      


     </div>
)