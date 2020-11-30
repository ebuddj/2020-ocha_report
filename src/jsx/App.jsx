import React, {Component} from 'react';
import style from './../styles/styles.less';

import DWChart from 'react-datawrapper-chart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {
    !function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}}))}();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/LRFlt/5/" />
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/yIyRs/5/" />
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/UjiFS/7/" />
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/lFK6r/14/" />
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/hL5PW/11/" />
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/yoP0E/17/" />
        <DWChart title="Chart" src="//datawrapper.dwcdn.net/yfXJf/8/" />
      </div>
    );
  }
}
export default App;