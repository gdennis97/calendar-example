import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { AutoSizer } from "react-virtualized";
//import "./Map.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


class MapOne extends Component {
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
                      href="https://i.ibb.co/LJMjcfD/Waukesha.jpg"
                    />
                    
                    <rect
                      onClick={this.handleClick.bind(this, "gravity-0-025")}
                      className={this.isActiveRoom("gravity-0-025")}
                      x="994.97"
                      y="141.04"
                      width="25.75"
                      height="25.48"
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

export default MapOne;