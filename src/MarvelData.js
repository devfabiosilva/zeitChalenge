//variavel global para adicionar os personagens da Marvel salvo pelo usuário
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as addData from './action/add_data';
import { connect } from 'react-redux';
import store from './store';
import { allHeroes } from './services/api';

class MarvelData extends Component {

    state = {
        newTodoText: "",
        link: ""
    }

    componentDidMount = async () => {
        const res = await allHeroes('0');
        console.log(res);
        this.props.updateLink(res.link);
    }

    addTodo = () => {

        this.props.addDataTxt(this.state.newTodoText);
        this.setState({ newTodoText:'' });
        console.log(store.getState());

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.parsedatx.map(data => (
                            <li key={data.id}>{data.text}</li>
                        ))
                    }
                </ul>
                <ul>
                    <li>{this.props.addlinkx.link?this.props.addlinkx.link:null}</li>
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
    parsedatx: state.parsedata,
    addlinkx: state.addlink
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(addData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MarvelData);

