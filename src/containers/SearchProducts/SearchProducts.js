import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ItemsRequestService } from "../../services/ItemsRequestService";
import SearchBar from "../../components/SearchBar/SearchBar";

import classes from "./SearchProducts.module.scss";

const SearchProducts = (props) => {
  const itemsRequestService = new ItemsRequestService();
  const history = useHistory();

  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  /**
   * Search product name suggestions
   */
  const searchSuggestionsHandler = () => {
    itemsRequestService
      .getSuggestedQueries(selectedSuggestion)
      .then((res) => {
        setSuggestions(res.data.suggested_queries);
      })
      .catch((e) => {
        throw new Error(e);
      });
  };

  /**
   * Search product event handler
   * @param {event} event
   */
  const searchProductsHandler = (event) => {
    if (
      (event.type === "keyup" && event.keyCode === 13) ||
      event.type === "click"
    ) {
      _performSearch(selectedSuggestion);
    }
  };

  /**
   * Go home url
   */
  const goToHomeHandler = () => {
    history.push("/items");
  };

  /**
   * Perform a search of products based on the query value
   * @param {string} query
   */
  const _performSearch = (query) => {
    // TODO
    // if (!query || this.productService.checkCacheSearch(query)) return;
    if (!query) return;
    const params = new URLSearchParams();
    // /items?search=

    if (typeof query === "string") {
      params.append("search", query);
    }
    if (typeof query === "object") {
      params.append("search", query.q);
    }

    // props.changeSearchQuery(params.toString());
    history.push({ search: params.toString() });
  };

  return (
    <section className={classes.SearchProducts}>
      <SearchBar
        suggestions={suggestions}
        selectedSuggestion={selectedSuggestion}
        searchSuggestions={searchSuggestionsHandler.bind(this)}
        goToHome={goToHomeHandler.bind(this)}
        searchProducts={searchProductsHandler.bind(this)}
        setSelectedSuggestion={setSelectedSuggestion}
      />
    </section>
  );
};

export default SearchProducts;
