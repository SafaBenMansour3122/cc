import React from 'react';
import './App.css';

export default class App extends React.Component {
  componentDidMount(){
    setTimeout(function(){alert("Hello message");},2000);
  }
  componentWillUnmount(){
    alert("Goodbye")
  }
  render(){
    return(<div>componentDidMount() and the componentWillMount()</div>)
  }
}


