import React, { Component } from 'react'
import quranApi from "./api/quranApi";
import Header from "./components/elements/header";
import MainHome from './components/pages/MainHome';
import ReadPage from './components/pages/ReadPages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surah: []
    }
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
      <>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<MainHome items={surah} />} />
            <Route path="/readpages/:id" element={<ReadPage items={surah} />} />
          </Routes>
        </Router>
      </>
    )
  }
}