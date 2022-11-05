import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { AutoSizer } from "react-virtualized";
import "./MapOne.css";
import {Link} from 'react-router-dom'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import Fingerprint from '@mui/icons-material/Fingerprint';


class MapThree extends Component {
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
          <div style={{ width: "100%", height: "80%" }}>
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
                href="https://i.ibb.co/dGSX1q6/BWing.jpg"
                    />
                    
                    <rect
                    onClick={this.handleClick.bind(this, "gravity-0-001")}
                    className={this.isActiveRoom("gravity-0-001")}
                    x="837.97"
                      y="1493.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                    onClick={this.handleClick.bind(this, "gravity-0-002")}
                    className={this.isActiveRoom("gravity-0-002")}
                    x="837.97"
                    y="1435.04"
                    width="50.75"
                    height="50.48"
                />
                <rect
                    onClick={this.handleClick.bind(this, "gravity-0-003")}
                    className={this.isActiveRoom("gravity-0-003")}
                    x="960.97"
                    y="970.04"
                    width="50.75"
                    height="50.48"
                    />
                <rect
                      onClick={this.handleClick.bind(this, "gravity-0-004")}
                      className={this.isActiveRoom("gravity-0-004")}
                    x="1070.97"
                    y="960.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-005")}
                      className={this.isActiveRoom("gravity-0-005")}
                      x="950.97"
                      y="900.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-006")}
                      className={this.isActiveRoom("gravity-0-006")}
                      x="940.97"
                      y="560.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-007")}
                      className={this.isActiveRoom("gravity-0-007")}
                      x="1000.97"
                      y="550.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-008")}
                      className={this.isActiveRoom("gravity-0-008")}
                      x="990.97"
                      y="480.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-009")}
                      className={this.isActiveRoom("gravity-0-009")}
                      x="930.97"
                      y="490.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-010")}
                      className={this.isActiveRoom("gravity-0-010")}
                      x="875.97"
                      y="490.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-01")}
                      className={this.isActiveRoom("gravity-0-011")}
                      x="860.97"
                      y="435.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-012")}
                      className={this.isActiveRoom("gravity-0-012")}
                      x="1225.97"
                      y="220.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-013")}
                      className={this.isActiveRoom("gravity-0-013")}
                      x="1295.97"
                      y="210.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-014")}
                      className={this.isActiveRoom("gravity-0-014")}
                      x="1285.97"
                      y="155.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-015")}
                      className={this.isActiveRoom("gravity-0-015")}
                      x="1215.97"
                      y="158.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-016")}
                      className={this.isActiveRoom("gravity-0-016")}
                      x="1200.97"
                      y="105.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-017")}
                      className={this.isActiveRoom("gravity-0-017")}
                      x="1270.97"
                      y="95.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-018")}
                      className={this.isActiveRoom("gravity-0-018")}
                      x="1470.97"
                      y="600.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-019")}
                      className={this.isActiveRoom("gravity-0-019")}
                      x="1490.97"
                      y="730.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-020")}
                      className={this.isActiveRoom("gravity-0-020")}
                      x="1510.97"
                      y="860.04"
                      width="50.75"
                      height="50.48"
                    />
                    
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-021")}
                      className={this.isActiveRoom("gravity-0-021")}
                      x="1570.97"
                      y="850.04"
                      width="50.75"
                      height="50.48"
                    />
                    <rect
                    onClick={this.handleClick.bind(this, "gravity-0-022")}
                    className={this.isActiveRoom("gravity-0-022")}
                    x="1450.97"
                    y="810.04"
                    width="50.75"
                    height="50.48"
                    />
                <rect
                    onClick={this.handleClick.bind(this, "gravity-0-023")}
                    className={this.isActiveRoom("gravity-0-023")}
                    x="1520.97"
                    y="935.04"
                    width="50.75"
                    height="50.48"
                    />
                </svg>
                </ReactSVGPanZoom>
              )}
            </AutoSizer>
          </div>
        </div>
    
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default MapThree;