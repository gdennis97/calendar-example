import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { AutoSizer } from "react-virtualized"; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom'


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
    <div className='HomePage'>
      <body>
        <header className='homeheader'>.</header>
      </body>
        <div className="container">
          <div className="item floorplan">
            <div>
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
    </div>
    );
  }
}


// ReactDOM.render(<App />, document.getElementById("root"));

export default MapOne;