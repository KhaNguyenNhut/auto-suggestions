import { suggestions, products, collections } from '../mocks/mock';

export const searchData = (keyword) => {
  const productsResponse = products.filter((each) =>
    each.title.toLowerCase().includes(keyword.toLowerCase())
  );
  const suggestionsResponse = suggestions.filter((each) =>
    each.term.toLowerCase().includes(keyword.toLowerCase())
  );
  const collectionsResponse = collections.filter((each) =>
    each.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return {
    suggestions: suggestionsResponse,
    collections: collectionsResponse,
    products: productsResponse,
  };
};
