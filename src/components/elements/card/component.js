import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { surah } = this.props;
    return (
      <div className="flex items-center justify-between bg-gray-100 rounded-md shadow-md mb-8 mx-3 px-2 hover:shadow-lg cursor-pointer">
        <div className="flex items-center py-2">
          <div className="flex items-center justify-center text-white bg-green-600 px-4 py-2 m-2 rounded-b-lg">
            {surah.number}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="text-gray-700">
                <h5 className="text-lg font-bold">{surah.name.transliteration.id}</h5>
                <div className="flex items-center">
                  <p className="text-gray-600">{surah.name.translation.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-green-600">
          <p className="text-xl font-bold">{surah.name.long}</p>
        </div>
      </div>
    )
  }
}
