import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {

  const navigate = useNavigate()

  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()

    navigate('/course-list/' + input)

  }

  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-black border border-gray-700 rounded-full shadow-sm">
  <img className="md:w-auto w-10 px-3" src={assets.search_icon} alt="search_icon" />
  
  <input
    onChange={e => setInput(e.target.value)}
    value={input}
    type="text"
    className="w-full h-full bg-black text-white placeholder-gray-400 outline-none"
    placeholder="Search for courses"
  />

  <button
    type="submit"
    className="bg-teal-500 hover:bg-teal-600 rounded-full text-white md:px-10 px-7 md:py-3 py-2 mx-1 transition"
  >
    Search
  </button>
</form>

  )
}

export default SearchBar