//variavel global para adicionar os personagens da Marvel salvo pelo usuário
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as addData from './action/add_data';
import { connect } from 'react-redux';
/*
                    {
                        this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                        ))
                    }
*/
class AddData extends Component {

    state = {
        newTodoText: ""
    }

    addTodo = () => {

        this.props.addDataTxt(this.state.newTodoText);
        this.setState({ newTodoText:'' });

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.parsedata.map(data => (
                        <li key={data.id}>{data.text}</li>
                        ))
                    }
                </ul>
                <input
                    type="text" 
                    value={this.state.newTodoText}
                    onChange={(e)=>{this.setState({newTodoText: e.target.value})}}
                />
                <button onClick={this.addTodo}>Novo todo</button>
            </div>
           
        );
    }
}

const mapStateToProps = state => ({
    parsedata: state.parsedata,
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(addData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddData);

