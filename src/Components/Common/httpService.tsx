import Axios from "axios";

Axios.interceptors.response.use(undefined,(error):any=>{ 
     return Promise.reject(error);
  });

  export default{
      delete:Axios.delete,
      get:Axios.get,
      post:Axios.post,
      put:Axios.put,
      
  };