import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import { connect } from 'dva'

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Footer from './Footer';

import './less/antMotion_style.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      isLogin:props.isLogin
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [


      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode} isLogin={this.state.isLogin}/>,
      <Content0 id="content_10_0" key="content_10_0" isMode={this.state.isMode}/>,
      <Content1 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {"isLogin":state.home.isLogin}
}

export default connect(mapStateToProps)(Home)

