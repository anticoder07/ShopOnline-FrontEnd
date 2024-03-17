export default function authHeader() {
  // @ts-ignore
  let user = JSON.parse(localStorage.getItem("auth"));

  console.log(user);

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` };
  } else {
    return {};
  }
}
