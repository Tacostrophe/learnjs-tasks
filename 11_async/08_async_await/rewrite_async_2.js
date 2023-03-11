const prompt = require('prompt-sync')();

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    const json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let name = await prompt("Введите логин?", "Tacostrophe");
  let user;
  while (true) {
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        name = prompt("Такого пользователя не существует, пожалуйста, повторите ввод.", "Tacostrophe");
      } else {
        throw (err);
      }
    }
  }
  console.log(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();