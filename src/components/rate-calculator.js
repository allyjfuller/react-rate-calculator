import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyRate: 0,
            hoursWorked: 0,

        };
    }

    setDailyRate(dailyRate){
        this.setState({
            dailyRate
        });
    }

    hoursWorked(hoursWorked){
        this.setState({
            hoursWorked
        });
    }

    render() {
        const rate = this.state.dailyRate / this.state.hoursWorked;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput id="hours" label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}
