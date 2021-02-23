import React from "react";

import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import {
  SEARCH_PLACEHOLDER,
  LOGO_ALT_LABEL,
  LOGO_SRC,
} from "../../assets/constants/app.constants";

import "./SearchBar.scss";

const SearchBar = (props) => {
  console.log(SEARCH_PLACEHOLDER)
  return (
    <div className="SearchBar">
      <img
        className="img-logo"
        alt={LOGO_ALT_LABEL}
        src={LOGO_SRC}
        onClick={props.goToHome}
      />
      <section className="p-inputgroup search-autocomplete">
        <AutoComplete
          value={props.selectedSuggestion}
          suggestions={props.suggestions}
          completeMethod={props.searchSuggestions}
          field="q"
          onChange={(e) => props.setSelectedSuggestion(e.value)}
          onKeyUp={props.searchProducts}
          onSelect={props.searchProducts}
          placeholder={SEARCH_PLACEHOLDER}
          ariaLabel="search suggestion input"
          inputId="search-input"
          minLength={2}
        />
        <Button
          type="button"
          icon="pi pi-search"
          className="search-button"
          onClick={props.searchProducts}
        ></Button>
      </section>
    </div>
  );
};

export default SearchBar;
