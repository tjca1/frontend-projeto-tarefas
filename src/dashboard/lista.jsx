import React from 'react'

export default props =>{
    const lista = props.lista || []
    console.log('=============================================='+JSON.stringify( props.lista))
    const renderRows = () =>{
        return lista.map(tarefas =>(
            <tr key={tarefas._id}>
                <td>{tarefas.description}</td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>

    )

}