const REACT_APP_URL = process.env.REACT_APP_URL;

export async function login(credentials) {
  const response = await fetch(`${REACT_APP_URL}/users/login-with-username`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response;
}

export async function refreshToken() {
  const response = await fetch(`${REACT_APP_URL}/users/refresh-token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  return response;
}
