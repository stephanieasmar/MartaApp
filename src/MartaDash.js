import React, { Component } from 'react';

const getMartaData = (cb) => {
    fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
      method: 'get',
    }).then(function(response) {
      return response.json()
    }).then(function(jsonData) {
      // console.log(jsonData);
      cb(jsonData);
    }).catch(function(err) {
      // Error :(
    });
}

class MartaDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      martaData: []
    };
  }

  componentWillMount() {
    this.martaDataGrabber = setInterval( () => {
      getMartaData((jsonData) => {
        this.setState({
          martaData: jsonData
        });
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.martaDataGrabber);
  }

  render() {

    let martaOutput = this.state.martaData.map((datum) => {
      // debugger;
      return (<div>
        <p>{datum.DESTINATION}</p>
        <p>{datum.DIRECTION}</p>
        <p>{datum.EVENT_TIME}</p>
        <p>{datum.LINE}</p>
        <p>{datum.NEXT_ARR}</p>
        <p>{datum.STATION}</p>
        <p>{datum.TRAIN_ID}</p>
        <p>{datum.WAITING_SECONDS}</p>
        <p>{datum.WAITING_TIME}</p>
      </div>)
    });
    // console.log(martaOutput);

    return (
      <div>
        <div>
          {martaOutput}
        </div>
      </div>
    )
  }

  // _updateMartaData = (jsonData) => {
  //     this.setState({
  //       martaData: jsonData
  //     });
  // }
}

export default MartaDashboard;
