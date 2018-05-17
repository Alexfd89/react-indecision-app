import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    //Class properties
    state = {
        options: [],
        selectedOption: undefined
    }
    //Class methods
    handleAddOption = (option) => {

        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }
    handleResetSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }
    //Component methods
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options: options}));
            }
        } catch (error) {
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }

    render(){
        const subtitle = 'Put yor life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                 </div>
                 <OptionModal
                    handleResetSelectedOption={this.handleResetSelectedOption}
                    selectedOption={this.state.selectedOption}
                 />
            </div>
        );
    }
}
