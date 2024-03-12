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

  return response;
}

export async function getDisputes() {
  const response = await fetch(`${REACT_APP_URL}/apis/get-disputes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function getRefunds() {
  const response = await fetch(`${REACT_APP_URL}/apis/get-refunds`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function deleteStripeEvent(id) {
  const response = await fetch(`${REACT_APP_URL}/apis/delete-event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

  return response;
}
