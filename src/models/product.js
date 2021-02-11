class Product {
  constructor(params) {
    this.id = params.id || null;
    this.title = params.title || "";
    this.author = params.author || {};
    this.price = params.price || {};
    this.categories = params.categories || [];
    this.pictures = params.pictures || null;
    this.thumbnail = params.thumbnail || null;
    this.address = params.address || null;
    this.free_shipping = params.free_shipping || null;
    this.address = params.price || null;
    this.description = params.description || null;
    this.address = params.price || null;
    this.soldQuantity = params.sold_quantity || null;
    this.availableQuantity = params.available_quantity || null;
    this.attributes = params.attributes || [];
    this.permalink = params.permalink || null;
  }
}

export default Product;
