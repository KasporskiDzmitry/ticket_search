import React from 'react';
import './resources/css/App.css';

import Filter from './components/Filter'
import TicketList from './components/TicketList'
import data from './resources/data/data';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            currRate: 1,
        };

        this.initData = data;
    }

    update(config) {
        this.setState(config)
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <Filter data={this.initData} update={this.update.bind(this)}/>
                    </div>
                    <div className="col-md-8">
                        <TicketList data={this.state.data} update={this.update.bind(this)} currRate={this.state.currRate}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
