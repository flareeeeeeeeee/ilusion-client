import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/products`;

export async function createDocument(values: any) {
  return axios.post(`${baseUrl}/create`, values);
}

export async function getDocument(id: any) {
  return axios.get(`${baseUrl}/details/${id}`);
}

export async function updateDocument(id: any, values: any) {
  return axios.put(`${baseUrl}/update/${id}`, values);
}
export async function uploadFile(form: FormData) {
  return axios.put(`${baseUrl}/upload/`, form);

}