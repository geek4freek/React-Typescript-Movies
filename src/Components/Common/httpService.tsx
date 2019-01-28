import Axios from "axios";
Axios.defaults.headers.common.authorize = getJwt();
Axios.interceptors.response.use(
  undefined,
  (error): any => {
    return Promise.reject(error);
  }
);

export function getJwt() {
  return localStorage.getItem("token");
}
export default {
  delete: Axios.delete,
  get: Axios.get,
  post: Axios.post,
  put: Axios.put
};

