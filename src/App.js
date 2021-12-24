import React, { Component } from 'react'
import quranApi from "./api/quranApi";
import Header from "./components/elements/header";
import MainHome from './components/pages/MainHome';
export default class App extends Component {
  state = {
    surah: []
  }

  componentDidMount() {
    this.handleGetData();
  }

  handleGetData = async () => {
    const response = await quranApi.get('/surah');

    this.setState({ surah: response?.data?.data || [] });
  }

  render() {
    const { surah } = this.state;
    return (
      <React.Fragment>
        <Header />
        <MainHome items={surah} />
      </React.Fragment>
    )
  }
}