import React, { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { ItemsRequestService } from "../../services/ItemsRequestService";

const SearchProducts = (props) => {
  const ITEMS_URL = "/items?search=";

  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const itemsRequestService = new ItemsRequestService();

  const searchSuggestions = () => {
    itemsRequestService.getSuggestedQueries(selectedSuggestion).then((res) => {
      console.log(res.data.suggested_queries);
      setSuggestions(res.data.suggested_queries);
      return res.data.suggested_queries;
    });
  };

  const searchProducts = (event) => {
    if (
      (event.type === "keyup" && event.keyCode === 13) ||
      event.type === "click"
    ) {
      console.log(selectedSuggestion);
    }
  };

  const goToHome = () => {
    // this.selectedValue = '';
    // this.router.navigate(['/'], { relativeTo: this.route });
  };

  return (
    <section className="search-product-container">
      <img
        className="img-logo"
        alt="Mercadolibre Logo"
        src="assets/img/Logo_ML@2x.png.png"
        onClick={props.goToHome}
      />
      <section className="p-inputgroup search-autocomplete">
        <AutoComplete
          value={selectedSuggestion}
          suggestions={suggestions}
          completeMethod={searchSuggestions}
          field="q"
          onChange={(e) => setSelectedSuggestion(e.value)}
          onKeyUp={searchProducts}
          placeholder="Nunca pares de buscar"
          ariaLabel="search suggestion input"
          inputId="search-input"
          minLength={2}
        />
        <button
          type="button"
          icon="pi pi-search"
          className="p-button-secondary search-button"
          onClick={searchProducts}
        ></button>
      </section>
    </section>
  );
};

export default SearchProducts;
