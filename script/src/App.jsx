import React from "react"
import ReactDOM from "react-dom"
import {Welcome} from "Welcome";



export class App extends React.Component
{
    render(props){
        return (
            <div>
                <div className='jumbotron'>
                    <h1>React Js Minimal</h1>
                    <br/>
                    <p>
                        Here its minimal file you need to start working with ReactJS.
                        <br/>
                        Now in next line we will render another Component of react.
                        
                        <Welcome />                        
                    </p>
                </div>                
            </div>
            );
    }
}