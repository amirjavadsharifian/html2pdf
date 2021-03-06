import React, { Component } from "react";
import { Tab, Tabs, Text, Icon } from "@blueprintjs/core";

import "./Home.scss";
import IframeLoader from "../../components/IframeLoader/IframeLoader";
import HTMLCode2PDF from "../../components/HTMLCode2PDF/HTMLCode2PDF";
import HTMLFile2PDF from "../../components/HTMLFile2PDF/HTMLFile2PDF";
import Convert2PDF from "../../components/Convert2PDF/Convert2PDF";

class Home extends Component {
  state = {
    navbarTabId: "code"
  };

  renderNabarTabTitle(id) {
    switch (id) {
      case "code":
        return (
          <Text className="nabarTabIcon">
            <Icon icon="code" /> <br /> Convert HTML code
          </Text>
        );

      case "file":
        return (
          <Text className="nabarTabIcon">
            <Icon icon="code-block" /> <br /> Convert HTML file
          </Text>
        );
    }
  }

  render() {
    return (
        <div className="htmlcode2pdf">
          <Tabs
            animate={true}
            onChange={this.handleNavbarTabChange}
            selectedTabId="code"
            id="navbar"
            className="navbar"
            selectedTabId={this.state.navbarTabId}
          >
            <Tab
              id="code"
              title={this.renderNabarTabTitle("code")}
              panel={<HTMLCode2PDF />}
            />
            <Tab
              id="file"
              title={this.renderNabarTabTitle("file")}
              panel={<HTMLFile2PDF />}
            />
            <Tabs.Expander />
          </Tabs>
          <Convert2PDF />
          <div className="preview">
            <IframeLoader
              id="previewIframe"
              name="previewIframe"
              width="100%"
              height="500"
              onLoad={() =>
                this.setState({ isLoading: false, iframeLoaded: true })
              }
            />
          </div>
        </div>
    );
  }

  handleNavbarTabChange = navbarTabId => this.setState({ navbarTabId });
}

export default Home;
