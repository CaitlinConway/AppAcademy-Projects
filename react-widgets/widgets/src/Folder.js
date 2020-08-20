import React from "react";
class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: props.titles,
      currentTab: props.currentTab,
      selectTab: props.selectTab,
    };
  }
  render() {
    let { titles, currentTab, selectTab } = this.state;
    return (
      <ul className="tab-header">
        {titles.map((title, currentTab) => {
          return (
            <li onClick={selectTab} id={currentTab} key={currentTab}>
              {title}
            </li>
          );
        })}
      </ul>
    );
  }
}

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: 0 };
  }
  selectTab = (e) => {
    this.setState({ currentTab: e.target.id });
  };

  render() {
    const folder = this.props.folders[this.state.currentTab];
    let folders = this.props.folders;
    let titles = folders.map((folder) => {
      return folder.title;
    });
    let { currentTab } = this.state;
    return (
      <>
        <h1>Folder</h1>
        <div className="tabs">
          <Headers
            titles={titles}
            currentTab={currentTab}
            selectTab={this.selectTab}
          />
          <div className="tab-content">{folder.content}</div>
        </div>
      </>
    );
  }
}
export default Folder;
