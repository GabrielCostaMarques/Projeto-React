import React from "react";
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Events from './components/Events'
import Forms  from './components/Forms'


export default function App() {
    return (
        <div className="app">

            <h1>Hello world</h1>
            <SayMyName nome="ever"/>
            <Pessoa nome="Gabriel" idade="19" profissao="Desenvolvedor"/>
            <List/>
            <Events numero={9}/>
            <Forms/>
           
        </div>


    )
}