export default async function fetchAPIAllData(name: string) {
  const url = `http://www.omdbapi.com/?s=${name}&apikey=7cd3c6c9`

  const response = await fetch(url);
  const data = await response.json()
  return data.Search
}
