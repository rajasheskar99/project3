import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    getCategoryId,
    getSearchInput,
    getRatingId,
    activeCategory,
    activeRating,
    clearFilters,
    searchAndEnter,
  } = props

  const getSearch = event => {
    getSearchInput(event.target.value)
  }
  const searchEnter = event => {
    if (event.key === 'Enter') {
      searchAndEnter()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="filter-search ">
        <input
          type="search"
          className="input"
          placeholder="Search"
          onChange={getSearch}
          onKeyDown={searchEnter}
        />
        <BsSearch className="search" />
      </div>
      <h1 className="category">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachI => {
          const getCategory = () => {
            getCategoryId(eachI.categoryId)
          }
          const categoryClass =
            activeCategory === eachI.categoryId ? 'active' : 'category-item'
          return (
            <li key={eachI.categoryId}>
              <p type="button" onClick={getCategory} className={categoryClass}>
                {eachI.name}
              </p>
            </li>
          )
        })}
      </ul>
      <h1 className="category">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(eachItem => {
          const getRating = () => {
            getRatingId(eachItem.ratingId)
          }
          const ratingClass =
            activeRating === eachItem.ratingId ? 'active' : 'category-item'
          return (
            <li
              className="rating-item"
              onClick={getRating}
              key={eachItem.ratingId}
            >
              <img
                className="rating-img"
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
              />

              <p className={ratingClass}>& up</p>
            </li>
          )
        })}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
