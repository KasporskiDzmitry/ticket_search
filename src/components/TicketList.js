import React, {Component} from 'react';
import Ticket from "./Ticket"

class TicketList extends Component {
    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        let data;
        if (this.props.data.length > 0) {
            data = this.props.data.map(i => {
                return <Ticket key={i.flight_id} ticketData={i} currRate={this.props.currRate}/>
            })
        } else {
            return <h2 className="tickets-not-found">Билетов не найдено</h2>;
        }
        return data;
    }

    render() {
        return (<div>{this.loadData()}</div>);
    }
}

export default TicketList;