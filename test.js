const api =
  "https://ecommerce-sharp-default-rtdb.asia-southeast1.firebasedatabase.app";
const usersKey = "-NaPr2rDZVtIiNMh4mnf";
const allUsersApi = `${api}/${usersKey}.json`;
async function createNewUserAccount(mail) {
  const res = await fetch(allUsersApi, {
    method: "POST",
    body: JSON.stringify({
      email: mail,
      cart: [],
      orders: [],
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const key = await res.json();
  console.log(key.name);
}
createNewUserAccount("mononoko@gmail.com");
