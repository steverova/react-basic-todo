import axios from "axios";

let BASE_URL = "https://ptcunbnogyweuepbjbbn.supabase.co/rest/v1/tasks";

async function makeRequest(method, url, data = {}) {
  const options = {
    method: method,
    url: url,
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Y3VuYm5vZ3l3ZXVlcGJqYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0Nzk5ODksImV4cCI6MTk5ODA1NTk4OX0.9p1N-4ndSsZfmz-HIiNYg6zKBI7qhUZ-GpMST7niqME",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Y3VuYm5vZ3l3ZXVlcGJqYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0Nzk5ODksImV4cCI6MTk5ODA1NTk4OX0.9p1N-4ndSsZfmz-HIiNYg6zKBI7qhUZ-GpMST7niqME",
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Example usage:

export async function getAllTask() {
  return await makeRequest("GET", BASE_URL);
}

export async function getTask(id) {
  return await makeRequest("GET", BASE_URL + `?id=eq.${id}`);
}

export async function createTask(task) {
  await makeRequest("POST", BASE_URL, task);
}

export async function updateTask(id, task) {
  await makeRequest("PATCH", BASE_URL + `?id=eq.${id}`, task);
}

export async function deleteTask(id) {
  await makeRequest("DELETE", BASE_URL + `?id=eq.${id}`);
}

export async function getTaskStatus(status) {
  return await makeRequest("GET", BASE_URL + `?done=eq.${status}`);
}
