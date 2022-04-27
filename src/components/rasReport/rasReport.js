import React, { Component, useState, useCallback, useRef } from 'react';
import moment from 'moment';

import './overview.css';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: "column"
  },
  tooltip: {
      outside: true,
      useHTML: true,
      formatter: function () {
          return `<div class="tooltip">The value for <b>${this.x}</b> is <b>${this.y}</b></div>`;
      }
  },
  xAxis: {
    labels: {
      enabled: false
    },
    tickLength: 1
  },

  yAxis: [
    {
        max: 100
    }
  ],

  plotOptions: {
    series: {
      borderRadius: 3,
      pointPadding: 0,
      groupPadding: 0.05,
    }
  },
  series: [
  {
    pointWidth: 25,
    color: "lightgrey",
    data: [71.5, {
      color: "red",
      y: 89.9,
    }, 16.4, 29.2, 44.0, 76.0, 35.6, 48.5]
  }, {
    color: "#407bfb",
    data: [0, 94.1]
  },
  {
    color: "#407bfb",
    data: [0, 70.1]
  },
  {
    color: "#407bfb",
    data: [0, 70.1]
  },
 ]
};


class RasReport extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }


  render() {

   
    return (
      <section className="rasReport">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(RasReport);