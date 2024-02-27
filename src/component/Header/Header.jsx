import React from 'react'
import SearchInput from '../SearchInput/SearchInput'

const Header = () => {
  return (
    <div className='container mx-auto flex justify-between'>
      <div className='flex items-center gap-5 '>
        <img width={40} src="https://fakeapi.platzi.com/_astro/logo.aa139940.png" alt="logo" />
        <h3>Platzi Fake Store API</h3>
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kg">KG</option>
        </select>
      </div>
    </div>
  )
}

export default Header
