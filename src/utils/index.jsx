export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=ea8a35b4&app_key=56b09823e04045b663443621d9014218&from=0&to=${limit}&`;

  const response = await fetch(url);
  const data = await response.json();
  return data?.hits;
}
export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=ea8a35b4&app_key=56b09823e04045b663443621d9014218`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
