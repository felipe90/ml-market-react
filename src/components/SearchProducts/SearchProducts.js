import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { ItemsRequestService } from "../../services/ItemsRequestService";
import "./SearchProducts.scss";

const SearchProducts = (props) => {
  const itemsRequestService = new ItemsRequestService();
  const history = useHistory();

  const SEARCH_PLACEHOLDER = "Nunca pares de buscar";

  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  /**
   * Search product name suggestions
   */
  const searchSuggestions = () => {
    itemsRequestService
      .getSuggestedQueries(selectedSuggestion)
      .then((res) => {
        setSuggestions(res.data.suggested_queries);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /**
   * Search product event handler
   * @param {event} event
   */
  const searchProducts = (event) => {
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
  const goToHome = () => {
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

    history.push({ search: params.toString() });
  };

  return (
    <section className="SearchProducts">
      <div className="search-product-container">
        <img
          className="img-logo"
          alt="Mercadolibre Logo"
          src={"/img/Logo_ML@2x.png.png"}
          onClick={goToHome}
        />
        <section className="p-inputgroup search-autocomplete">
          <AutoComplete
            value={selectedSuggestion}
            suggestions={suggestions}
            completeMethod={searchSuggestions}
            field="q"
            onChange={(e) => setSelectedSuggestion(e.value)}
            onKeyUp={searchProducts}
            onSelect={searchProducts}
            placeholder={SEARCH_PLACEHOLDER}
            ariaLabel="search suggestion input"
            inputId="search-input"
            minLength={2}
          />
          <Button
            type="button"
            icon="pi pi-search"
            className="search-button"
            onClick={searchProducts}
          ></Button>
        </section>
      </div>
    </section>
  );
};

export default SearchProducts;
