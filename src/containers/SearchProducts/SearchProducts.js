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
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
  const searchProductsHandler = (event = null, queryValue) => {
    if (!event) {
      return
    }

    // Handle search button and 'enter' key event action
    if (
      (event.type === 'keyup' && event.keyCode === 13) ||
      event.type === 'click'
    ) {
      _performSearch(selectedSuggestion)
    }

    // Handle autocomplete component original event action
    if (event.originalEvent) {
      if (
        (event.originalEvent.type === 'keydown' &&
          event.originalEvent.keyCode === 13) ||
        event.originalEvent.type === 'click'
      ) {
        _performSearch(queryValue)
      }
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
   * Perform a search of products based on 'selectedSuggestion' value
   * @param {string} queryValue
   */
  const _performSearch = (queryValue) => {
    if (!queryValue) return

    const params = new URLSearchParams()
    params.append('search', queryValue)

    // Update search query and state
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
