class ProductList {
  constructor(params) {
    this.relatedCategories = params.relatedCategories || [];
    this.availableFilters = params.availableFilters || null;
    this.items = params.items || [];
  }
}

export default ProductList;
