import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import WithClass from '../../hoc/WithClass'

import { ItemsRequestService } from '../../services/ItemsRequestService'
import SearchBar from '../../components/SearchBar/SearchBar'

import classes from './SearchProducts.module.scss'

const SearchProducts = (props) => {
  const itemsRequestService = new ItemsRequestService()
  const history = useHistory()

  const [selectedSuggestion, setSelectedSuggestion] = useState(null)
  const [suggestions, setSuggestions] = useState(null)

  /**
   * Search product name suggestions
   */
  const searchSuggestionsHandler = () => {
    itemsRequestService
      .getSuggestedQueries(selectedSuggestion)
      .then((res) => {
        setSuggestions(res.data.suggested_queries)
      })
      .catch((e) => {
        throw new Error(e)
      })
  }

  /**
   * Search product event handler
   * @param {event} event
   */
  const searchProductsHandler = (event) => {
    if (
      (event.type === 'keyup' && event.keyCode === 13) ||
      event.type === 'click'
    ) {
      _performSearch(selectedSuggestion)
    }
  }

  /**
   * Go home url
   */
  const goToHomeHandler = () => {
    history.push('/items')
  }

  /**
   * Perform a search of products based on the query value
   * @param {string} query
   */
  const _performSearch = (query) => {
    if (!query) return
    const params = new URLSearchParams()

    if (typeof query === 'string') {
      params.append('search', query)
    }
    if (typeof query === 'object') {
      params.append('search', query.q)
    }

    props.changeSearchQuery(params.toString())
    // history.push("/items", { search: params.toString() });
    history.push(`/items?${params.toString()}`)
  }

  return (
    <WithClass className={classes.SearchProducts}>
      <div className="p-grid p-justify-around">
        {/* <div className="p-sm-0 p-md-2 p-lg-2"></div> */}
        <SearchBar
          suggestions={suggestions}
          selectedSuggestion={selectedSuggestion}
          searchSuggestions={searchSuggestionsHandler.bind(this)}
          goToHome={goToHomeHandler.bind(this)}
          searchProducts={searchProductsHandler.bind(this)}
          setSelectedSuggestion={setSelectedSuggestion}
        />
        {/* <div className="p-sm-0 p-md-2 p-lg-2"></div> */}
      </div>
    </WithClass>
  )
}

export default SearchProducts
