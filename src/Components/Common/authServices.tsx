import  http from './httpService';

// const apiEndPoint='https://localhost:44390/api/login';

export const login=(email:string,password:string)=>{
// tslint:disable-next-line: no-console
    console.log(email,password);
    const obj={email,password};
return http.post('https://localhost:44390/api/Login',obj);
}