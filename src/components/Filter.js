import React from 'react'

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCurrency: "BYN",
            currRate: 1,
            options: []
        };

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.reject = this.reject.bind(this);
        this.conversion = this.conversion.bind(this)
    }

    onClick(e) {
        e.preventDefault();
        this.setState({selectedCurrency: e.target.value}, () => {
            this.conversion();
        });
    }

    conversion() {
        let rate;
        switch (this.state.selectedCurrency) {
            case "USD": {
                rate = 2.021;
                break;
            }
            case "EUR": {
                rate = 2.245;
                break;
            }
            default: {
                rate = 1;
                break;
            }
        }
        this.setState({currRate: rate}, () => {
            this.props.update({currRate: this.state.currRate});
        });
    }

    isActive (value){
        return 'btn-primary '+((value===this.state.selectedCurrency) ?'press-button':'default');
    }

    onChange(e) {
        const options = this.state.options;
        let index;
        if (e.target.checked) {
            options.push(+e.target.value);
        } else {
            index = options.indexOf(+e.target.value);
            options.splice(index, 1);
        }
        this.setState({options: options});
    }

    filter() {
        if (this.state.options.length > 0) {
            return this.props.data.filter(ticket => {
                let flag;
                for (let i = 0; i < this.state.options.length; i++) {
                    if (flag) {
                        break;
                    } else {
                        flag = ticket.stops == this.state.options[i];
                    }
                }
                return flag;
            })
        } else {
            return this.props.data;
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.update({data: this.filter()});
    }

    reject(e) {
        e.preventDefault();
        let checkboxes = document.getElementsByClassName("option-input");

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkboxes[i].checked = false;
            }
        }

        this.setState({options: []}, () => {
            this.props.update({data: this.filter()});
        });
    }

    render() {
        return (
            <div>
                <div className="filter-container">
                    <div className="row cur-switcher-wrapper">
                        <div className="currency-switcher">
                            <button className={this.isActive("BYN")} id="BYN" value="BYN" onClick={this.onClick}>BYN</button>
                            <button className={this.isActive("USD")} id="USD" value="USD" onClick={this.onClick}>USD</button>
                            <button className={this.isActive("EUR")} id="EUR" value="EUR" onClick={this.onClick}>EUR</button>
                        </div>
                    </div>
                    <div className="row stops-wrapper">
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <input className="stops-checkbox" type="submit" value="Применить"/>
                                <span className="reject" id="reject" onClick={this.reject}>сбросить</span>
                                <label>
                                    <input type="checkbox" className="option-input" value="0" onChange={this.onChange}/>
                                    без пересадок
                                </label>
                                <label>
                                    <input type="checkbox" className="option-input" value="1" onChange={this.onChange}/>
                                    1 пересадка
                                </label>
                                <label>
                                    <input type="checkbox" className="option-input" value="2" onChange={this.onChange}/>
                                    2 пересадки
                                </label>
                                <label>
                                    <input type="checkbox" className="option-input" value="3" onChange={this.onChange}/>
                                    3 пересадки
                                </label>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter