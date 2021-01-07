const baseUrl = process.env.REACT_APP_API_URL; //variable de entorno

export const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; //en desarrollo http://localhost:4000/endpoint definido en el backend

  //si no especifico metodo de envio lo dejo en GET
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; //en desarrollo http://localhost:4000/endpoint definido en el backend
  const token = localStorage.getItem("token") || "";
  const prs = localStorage.getItem("prs") || "";

  //si no especifico metodo de envio lo dejo en GET
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
        "x-prs": prs,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-prs": prs,
      },
      body: JSON.stringify(data),
    });
  }
};
