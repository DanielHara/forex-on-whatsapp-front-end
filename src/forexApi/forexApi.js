const baseUrl = "https://0.0.0.0:5000/";
const listUsersUrl = `${baseUrl}users/`;
const insertUserUrl = `${baseUrl}users/insert`;

const postData = (url='', data) => {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json());
}

export class Client {
  constructor(name, phoneNumber, currencies) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.currencies = currencies;
  }
}

export class ForexApi {
  listClients (client) {
    var request = new XMLHttpRequest();
    request.open('GET', listUsersUrl);
  }

  postAddClient (client) {
    const name = client.name;
    const phoneNumber = client.phoneNumber;
    const currencies = client.currencies;

    const data = {
        name: name,
        phone_number: phoneNumber,
        assets: currencies,
    };

    postData(insertUserUrl, data)
      .then((data) => { console.log(JSON.stringify(data)) })
      .catch((error) => { console.error(error) } );
  }
}
