import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class MiniPlot extends Component{

  render(){
    let xxx = [];
    let yyy = [];

    return(
      <Plot
        useResizeHandler
        data={[ {type: 'scatter', x: xxx, y: yyy}, ]}
        style={{ width: '100%', height: '50%'}}
        layout={{
          plot_bgcolor: '#212124',
          paper_bgcolor: '#212124',
          font: {
            color: '#e3e3e3',
            family: 'Kanit',
          },
          autosize: true,
          //title: 'React - Plotly',
          automargin: true,
          margin:{ l: 0, r: 0, b: 0, t: 0, pad: 0 },
          responsive: true
        }}
      />

    )

  }
}

export default MiniPlot