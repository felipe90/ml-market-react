import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import WithClass from '../../hoc/WithClass'

import { ItemsRequestService } from '../../services/ItemsRequestService'
import SearchBar from '../../components/SearchBar/SearchBar'

import classes from './SearchProducts.module.scss'

const SearchProducts = ({ changeSearchQuery }) => {
  const itemsRequestService = new ItemsRequestService()
  let location = useLocation()
  let history = useHistory()

  const [selectedSuggestion, setSelectedSuggestion] = useState(null)
  const [suggestions, setSuggestions] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('search')) {
      setSelectedSuggestion(params.get('search'))
    }
  }, [location.search])

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
    history.go()
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
  
    // Upload search query and state 
    changeSearchQuery(params)
    history.push({
      pathname: '/items',
      search: `?${params.toString()}`,
      state: `?${params.toString()}`,
    })
  }

  return (
    <WithClass className={classes.SearchProducts}>
      <div className="p-grid p-justify-around">
        <SearchBar
          suggestions={suggestions}
          selectedSuggestion={selectedSuggestion}
          searchSuggestions={searchSuggestionsHandler.bind(this)}
          goToHome={goToHomeHandler.bind(this)}
          searchProducts={searchProductsHandler.bind(this)}
          setSelectedSuggestion={setSelectedSuggestion}
        />
      </div>
    </WithClass>
  )
}

export default SearchProducts
