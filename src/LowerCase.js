import React, { Component } from 'react';
class LowerCase extends Component {

    constructor(props){
        super(props);
        this.state={
            text: 'HELLO WORLD'
        }
    }

    toLowerCase = () => {
        const lowerCase = this.state.text.toLowerCase();
        this.setState({
            text: lowerCase
        });
    }
    toUpperCase = () => {
        const upperCase = this.state.text.toUpperCase();
        this.setState({
            text: upperCase
        });
    }
    render() {
        return (    
            <div >
                <div style={{fontSize: 20, marginBottom: 10}}>{this.state.text}</div>
                <button
                onPress={()=>{this.toLowerCase()}}
                value = 'LowerCase'
                title="Lower Case"
                color="blue"
            />
             <button
                onPress={()=>{this.toUpperCase()}}
                title="Upper Case"
                color="blue"
            />
            </div>
        );
    }
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
// });


export default LowerCase;