import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
//import { Message } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    debugger
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      const distances = []
      const labels =[]
      this.state.performanceData.forEach(entry => {
          distances.push(entry.data.distance)
          labels.push(entry.data.message)
      })
      const data = {
        datasets: [{
          data: distances
        }],    
        labels: labels
      };
      
      dataIndex = (
        <>
          <Line ref='chart' data={data} />
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </>
          
      )
    }

    return (
      <div>
        {this.state.performanceData ?
        dataIndex :
        'no data'}
      </div>
    );
  }      
}
  export default DisplayPerformanceData;