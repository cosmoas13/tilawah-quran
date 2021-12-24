import React, { Component } from 'react'
import Card from '../../elements/card'

export default class MainHome extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    const { items } = this.props;
    const { search } = this.state;

    const listData = items.filter((data) => {
      if (search === "") {
        return data;
      } else if (data?.name?.transliteration?.id.toLowerCase().includes(search.toLowerCase()) ||
        data?.name?.translation?.id.toLowerCase().includes(search.toLowerCase())) {
        return data;
      }
    }).map((data) => {
      return (
        <Card surah={data} />
      )
    })

    return (
      <React.Fragment>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password">
                  Search
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="Search surah"
                  onChange={this.handleSearch}
                />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
              {listData}
            </div>
          </div>
        </main>
      </React.Fragment >
    )
  }
}
