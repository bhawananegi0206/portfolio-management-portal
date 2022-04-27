import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';

import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  handleSelect(key, formCategory) {
    this.props.toggleForm(formCategory);
    this.setState({ key });
  }

  render() {

    return (
      <div className="search__box">
        <ul className="details" bsStyle="tabs" activeKey={this.state.key}>
        <li eventKey={1} title="Form1" onClick={() => this.handleSelect(1, 'form1')}>Overview</li>
        <li eventKey={2} title="Form2" onClick={() => this.handleSelect(2, 'form2')}>Demand Tracker</li>
        <li eventKey={3} title="Form3" onClick={() => this.handleSelect(3, 'form3')}>RAS / PP Report</li>
        <li eventKey={4} title="Form4" onClick={() => this.handleSelect(4, 'form4')}>Fulfillment Tracker</li>
      </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    flights: state.flights,
    searchstring: state.searchstring
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (data) => dispatch({ state: data, type: "all" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);