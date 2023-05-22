import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    delete: (url: string) => axios.get(url).then(responseBody),
}

// For images
const ImageCatalog = {
    //list: () => request.get('images'),
    list: (searchTerm?: string) => {
        if (searchTerm) {
          return request.get(`images?searchTerm=${searchTerm}`);
        } else {
          return request.get('images');
        }
      },
    details: (id: number) => request.get(`images/${id}`)

   
}

// For categories 
const Category = {
    list: () => request.get('categories')
}

const agent = {
    ImageCatalog,
    Category
}

export default agent; 