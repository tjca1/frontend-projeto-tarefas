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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        
        

        this.atualiza()
    }


    

    atualiza(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        //axios.get(`${url}?sort=-createdAt${search}`)
        axios.get(`${url}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description, lista: resp.data}))
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

    handleRemove(tarefas){
        axios.delete(`${url}/${tarefas._id}`)
        .then(resp => this.atualiza(this.state.description))
    }


     handleDone(tarefa){
        axios.put(`${url}/${tarefa._id}`, { ...tarefa, done: true })
            .then(resp => this.atualiza(this.state.description))
    }
     handlePending(tarefa){
        axios.put(`${url}/${tarefa._id}`, { ...tarefa, done: false })
        .then(resp => this.atualiza(this.state.description))
    }





    render(){
        return (
            
            <div>
                <Cabecalho name='Tarefas' small='Cadastro'/>
                <Form 
                description={this.state.description}
                handleAdd={this.handleAdd}

                name='Tarefas' small='Cadastro'/>
                <Lista lista={this.state.lista} 
                    handleRemove={this.handleRemove}
                    handleChange={this.handleChange} 
                    handleDone={this.handleDone} 
                    handlePending={this.handlePending} 
                
                name='Tarefas' small='Cadastro'/>

            </div>
        
        )
    }

}

