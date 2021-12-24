import React, { Component } from 'react'
import Card from '../../elements/card'

export default class MainHome extends Component {
  render() {

    const { items } = this.props;
    const listData = items.map((item) => {
      return (
        <Card surah={item} />
      )
    })

    return (
      <React.Fragment>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Search
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="Search surah"
                />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {listData}
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
