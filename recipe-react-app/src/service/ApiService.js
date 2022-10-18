import {API_BASE_URL} from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken){
        headers.append("Authorization", "Bearer "+accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(request){
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
    .then((response)=>
    response.json().then((json)=>{
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    }))
    .catch((error)=>{
        console.log(error.status);
        if(error.status === 403){
            window.location.href="/login";
        }
        return Promise.reject(error);
    });
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
    .then((response)=>{
        if(response.token){
            localStorage.setItem(ACCESS_TOKEN, response.token);
            window.location.href="/fridge";
        }
    })
    .catch((error)=>{
        console.log('로그인 실패...');
        return false;
    })
}

export function signup(userDTO){
    return call("/auth/signup", "POST", userDTO)
    .then((response)=> {
        if(response.id){
            window.location.herf="/login";
        }
    })
    .catch((error)=>{
        console.log(error.state);
        if(error.state === 403) {
            window.location.herf="/auth/signup";
        }
        return Promise.reject(error);
    })
}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN,null);
    window.location.href="/";
}