const SITE_ID = 'MCO';

const ML_API = {
  ITEMS_QUERY_URI : `https://api.mercadolibre.com/sites/${SITE_ID}/search?q=`,
  ITEM_QUERY_URI : 'https://api.mercadolibre.com/items/',
  PICTURES_QUERY_URI : 'https://api.mercadolibre.com/items/',
  ITEM_DESC_URI : 'https://api.mercadolibre.com/items/{id}/description',
  CATEGORIES_URI : 'https://api.mercadolibre.com/categories/{id}',
  USERS_URI : 'https://api.mercadolibre.com/users/{id}',
  ITEMS_QUERY_LIMIT : 4,
  PICTURE_SIZE : "200x200"
}

module.exports = ML_API;
