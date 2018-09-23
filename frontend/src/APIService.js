export const fetchItemTypes = fetch('http://localhost:3000/item_types').then(
  data => data.json()
);

export const fetchShoppingListItems = clientId =>
  fetch(
    `http://localhost:3000/shopping_list_items?client_id=eq.${clientId}`
  ).then(res => res.json());

export const submitShoppingListItem = (clientId, itemCategory) => {
  const data = {
    client_id: clientId,
    item_type: Number(itemCategory)
  };
  return fetch('http://localhost:2000/shopping_list_items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
  });
};
