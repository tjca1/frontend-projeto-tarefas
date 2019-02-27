import React from 'react'
import axios from 'axios'
import Cabecalho from '../template/cabecalho'
import Form from './formulario'
import Lista from './lista'


const url = 'http://localhost:3003/api/todos'

export default class DashBoard extends React.Component{

  

    constructor(props){
        super(props)
        this.state = { description: '', lista: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.atualiza()
    }


    atualiza(){
        axios.get(`${url}?sort=-createdAt`).then((resposta) =>
         this.setState({...this.state, description:'', lista: resposta.data})
        )
    }

    handleAdd() {
        const description = this.state.description
        axios.post(url, { description })
            .then(resp => this.atualiza())
    }

    handleChange(e){
        var d = e.target.value
        this.setState({...this.state, description:d})
    }



    render(){
        return (
            
            <div>
                <Cabecalho name='Tarefas' small='Cadastro'/>
                <Form 
                description={this.state.description}
                handleAdd={this.handleAdd}
                handleChange={this.handleChange} 
                name='Tarefas' small='Cadastro'/>
                <Lista lista={this.state.lista} name='Tarefas' small='Cadastro'/>

            </div>
        
        )
    }

}

