import React from 'react'
import logo from '../resources/img/logo.png'

class Ticket extends React.Component {
    render() {
        const data = this.props.ticketData;

        return (
            <div className="ticket-container">
                <div className="row">
                    <div className="col-md-4" id="buySection">
                        <img id="logo" src={logo} alt="Turkish Airlines" />
                        <button className="buy-button">Купить за {(data.price * this.props.currRate).toFixed(2)}</button>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4" id="depTime">
                                {data.departure_time}
                            </div>
                            <div className="col-md-3" id="stops">
                                пересадок: {data.stops}
                            </div>
                            <div className="col-md-4" id="arrTime">
                                {data.arrive_time}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5" id="depDetails">
                                <p><strong>{data.departure_code}, {data.departure_rus}</strong></p>
                                <p>{data.departure_date}</p>
                            </div>
                            <div className="col-md-3" />
                            <div className="col-md-4" id="arrDetails">
                                <p><strong>{data.arrive_code}, {data.arrive_rus}</strong></p>
                                <p>{data.arrive_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket