async function loadJson(url) {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  const json = await response.json();
  return json;
}

loadJson('https://api.github.com/users/${name}')
  .catch(console.log); 