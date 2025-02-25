import axios from 'axios';

const API = 'http://localhost:3000/';

export const Api = axios.create({ baseURL: API });

export async function setBearerToken(token: string) {
  Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
