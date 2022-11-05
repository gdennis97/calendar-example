import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { AutoSizer } from "react-virtualized";
import "./MapOne.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'


class MapTwo extends Component {
  state = { tool: TOOL_NONE, value: INITIAL_VALUE };
  Viewer = null;

  componentDidMount() {
    setTimeout(() => {
      this.Viewer.fitToViewer();
    }, 100);
  }

  changeTool(nextTool) {
    this.setState({ tool: nextTool });
  }

  changeValue(nextValue) {
    this.setState({ value: nextValue });
  }

  handleClick(filter) {
    this.setState({ selected: filter });
  }

  isActiveRoom(value) {
    return "floorplan__room " + (value === this.state.selected ? "active" : "");
  }

  isActiveList(value) {
    return value === this.state.selected ? "active" : "";
  }

  render() {
    return (
      <div className="container">
        {/* <div className="item booking-list"> */}
          {/* <ul>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-001")}
              className={this.isActiveList("gravity-0-001")}
            >
              Room 1
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-002")}
              className={this.isActiveList("gravity-0-002")}
            >
              Room 2
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-003")}
              className={this.isActiveList("gravity-0-003")}
            >
              Room 3
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-004")}
              className={this.isActiveList("gravity-0-004")}
            >
              Room 4
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-005")}
              className={this.isActiveList("gravity-0-005")}
            >
              Room 5
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-022")}
              className={this.isActiveList("gravity-0-022")}
            >
              Room 22
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-023")}
              className={this.isActiveList("gravity-0-023")}
            >
              Room 23
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-024")}
              className={this.isActiveList("gravity-0-024")}
            >
              Room 24
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-025")}
              className={this.isActiveList("gravity-0-025")}
            >
              Room 25
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-026")}
              className={this.isActiveList("gravity-0-026")}
            >
              Room 26
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-027")}
              className={this.isActiveList("gravity-0-027")}
            >
              Room 27
            </li>
            <li
              onClick={this.handleClick.bind(this, "gravity-0-028")}
              className={this.isActiveList("gravity-0-028")}
            >
              Room 28
            </li>
          </ul> */}
        {/* </div> */}
        <div className="item floorplan">
        <div>
                <h4>Key</h4>
                <p1>AM</p1><div></div>
                <p1>PM</p1><div></div>
                <p1>BOTH</p1>
                <Link to='/'><button className='homebutton'>Home</button></Link> 
        <Link to='/MapOne'><button className= 'loginbutton'>Map1</button></Link>
        <Link to='/MapTwo'><button className= 'registerbutton'>Map2</button></Link>
        <Link to='/MapThree'><button className= 'registerbutton'>Map3</button></Link>
            </div>
          <div style={{ width: "100%", height: "100%" }}>
            <AutoSizer>
            
              {({ width, height }) => (
                <ReactSVGPanZoom
                  width={width}
                  height={height}
                  ref={Viewer => (this.Viewer = Viewer)}
                  tool={this.state.tool}
                  onChangeTool={tool => this.changeTool(tool)}
                  value={this.state.value}
                  onChangeValue={value => this.changeValue(value)}
                  background="#FFF"
                  detectAutoPan={false}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={920}
                    height={1589}
                  >
                    <image
                      overflow="visible"
                      width={1920}
                      height={1589}
                      href="https://i.ibb.co/VCSDTqR/AWing.jpg"
                    />
                    
                    {/* <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-001")}
                      className={this.isActiveRoom("gravity-0-001")}
                      points="510.22 896.57 256.82 932.49 274.78 1058.85 553.46 1020.61 546.14 972.72 520.86 975.71 510.22 896.57"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-002")}
                      className={this.isActiveRoom("gravity-0-002")}
                      points="553.46 1026.81 276.11 1066.83 288.75 1176.57 567.42 1138.33 553.46 1026.81"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-004")}
                      className={this.isActiveRoom("gravity-0-004")}
                      points="571.19 1148.47 345.94 1181.23 364.57 1308.92 548.79 1285.65 536.82 1217.81 580.05 1210.49 571.19 1148.47"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-005")}
                      className={this.isActiveRoom("gravity-0-005")}
                      points="592.69 1283.65 369.89 1317.57 386.51 1433.96 614.3 1425.98 592.69 1283.65"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-003")}
                      className={this.isActiveRoom("gravity-0-003")}
                      points="609.32 1008.97 625.35 1133.59 870.03 1101.69 852.74 977.71 609.32 1008.97"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-022")}
                      className={this.isActiveRoom("gravity-0-022")}
                      points="1472.26 1076.81 1202.9 1133.59 1230.84 1265.36 1500.19 1209.49 1472.26 1076.81"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-023")}
                      className={this.isActiveRoom("gravity-0-023")}
                      points="1503.19 1214.65 1233.83 1271.43 1261.76 1403.2 1531.12 1347.33 1503.19 1214.65"
                    />
                    <polygon
                      onClick={this.handleClick.bind(this, "gravity-0-024")}
                      className={this.isActiveRoom("gravity-0-024")}
                      points="1585.39 1343.09 1262.76 1411.1 1292.7 1552.31 1610.93 1468.88 1585.39 1343.09"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-028")}
                      className={this.isActiveRoom("gravity-0-028")}
                      x="663.44"
                      y="141.04"
                      width="105.75"
                      height="217.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-027")}
                      className={this.isActiveRoom("gravity-0-027")}
                      x="774.5"
                      y="141.04"
                      width="105.75"
                      height="217.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-026")}
                      className={this.isActiveRoom("gravity-0-026")}
                      x="884.24"
                      y="141.04"
                      width="105.75"
                      height="217.48"
                    /> */}
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-001")}
                      className={this.isActiveRoom("gravity-0-001")}
                      x="510.97"
                      y="840.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-002")}
                      className={this.isActiveRoom("gravity-0-002")}
                      x="570.97"
                      y="843.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-003")}
                      className={this.isActiveRoom("gravity-0-003")}
                      x="630.97"
                      y="847.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-004")}
                      className={this.isActiveRoom("gravity-0-004")}
                      x="625.97"
                      y="935.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-005")}
                      className={this.isActiveRoom("gravity-0-005")}
                      x="560.97"
                      y="930.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-006")}
                      className={this.isActiveRoom("gravity-0-006")}
                      x="499.97"
                      y="925.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-007")}
                      className={this.isActiveRoom("gravity-0-007")}
                      x="492.97"
                      y="1055.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-008")}
                      className={this.isActiveRoom("gravity-0-008")}
                      x="552.97"
                      y="1065.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-009")}
                      className={this.isActiveRoom("gravity-0-009")}
                      x="607.97"
                      y="1070.04"
                      width="50.75"
                      height="50.48"
                    />
                                        <rect
                      onClick={this.handleClick.bind(this, "gravity-0-010")}
                      className={this.isActiveRoom("gravity-0-010")}
                      x="612.97"
                      y="990.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-011")}
                      className={this.isActiveRoom("gravity-0-011")}
                      x="555.97"
                      y="983.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-012")}
                      className={this.isActiveRoom("gravity-0-012")}
                      x="500.97"
                      y="973.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-013")}
                      className={this.isActiveRoom("gravity-0-013")}
                      x="600.97"
                      y="1125.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-014")}
                      className={this.isActiveRoom("gravity-0-014")}
                      x="545.97"
                      y="1120.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-015")}
                      className={this.isActiveRoom("gravity-0-015")}
                      x="485.97"
                      y="1115.04"
                      width="50.75"
                      height="50.48"
                    />
            </svg>
                </ReactSVGPanZoom>
              )}
            </AutoSizer>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default MapTwo;