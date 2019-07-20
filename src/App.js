import React, {Component} from 'react';
import Profile from './components/Profile';
import "./App.css"
import './stars.scss'


export default class App extends Component {
    render() {
        return (
            <div className="stars">
                <div className="twinkling">
                    <div className="App">
                        <Profile/>
                    </div>
                </div>
            </div>
        )
    }

}

