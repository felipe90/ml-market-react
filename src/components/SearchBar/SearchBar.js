import React from "react";

import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import {
  SEARCH_PLACEHOLDER,
  LOGO_ALT_LABEL,
  LOGO_SRC,
} from "../../assets/constants/app.constants";
import WithClass from '../../hoc/WithClass'

import "./SearchBar.scss";

const SearchBar = ({
  suggestions,
  searchProducts,
  searchSuggestions,
  selectedSuggestion,
  goToHome,
  setSelectedSuggestion
}) => {
  return (
    <div className="SearchBar p-sm-12 p-md-8 p-lg-8 p-sm-offset-0 p-md-offset-2 p-lg-offset-2">
      <img
        className="img-logo"
        alt={LOGO_ALT_LABEL}
        src={LOGO_SRC}
        onClick={goToHome}
      />
      <WithClass className="p-inputgroup search-autocomplete">
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
      </WithClass>
    </div>
  );
};

export default SearchBar;
