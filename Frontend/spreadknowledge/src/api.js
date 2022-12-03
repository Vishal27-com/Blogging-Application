import axios from 'axios';
function getToken(){
    let token=window.localStorage.getItem("access_token");
    return token;
}
function getRefreshToken(){
    let refreshToken=window.localStorage.getItem("refresh_token");
    return refreshToken;
}
const instance=axios.create({
    baseURL:"https://spreadknowledge.onrender.com/",
    headers:{
        "Content-Type": "application/json",
      },
})
instance.interceptors.request.use(
    (config)=>{
        const token=getToken();
        if(token){
            config.headers["authorization"]=token;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    async (res)=>{
        if(res.data.message==='jwt expired' && res.data.error){
            try{
                const ref=await req_for_refresh();
                const {token}=ref.data.message;
                window.localStorage.setItem("access_token",token);
                return after_refresh(res.config);
            }catch(err){
             return Promise.reject(err);
            }
        }
        return res;
    },
    (err)=>{
     return Promise.reject(err);
    }
)
function req_for_refresh(){
    return instance.post("/refresh",{
        refreshToken_for_newToken:getRefreshToken(),
    });
}
function after_refresh(config){
    return instance({
        method:config.method,
        url:config.url
    });
}


export function signup(data){
    return instance.post(`/signup`,data)
}
export function login(data){
    return instance.post(`/login`,data)
}

export function getUser(){
    return instance.get(`/user`)
}
export function uploadFile(data){
    return instance.post("/file/upload",data,{
        headers:{"Content-Type":"multipart/form-data"}
    });
}
export function BlogPost(data){
    return instance.post("/blog/post",data)
}
export function BlogUpdate(id,data){
    return instance.patch(`/blog/${id}`,data)
}
export function BlogDelete(id){
    return instance.delete(`/blog/${id}`)
}
export function getAllBlogs(){
    return instance.get("/blog");
}
export function getBlogById(id){
    return instance.get(`/blog/${id}`)
}
export function commentPost(data){
    return instance.post("/comment/post",data)
}
export function getComment(id){
    return instance.get("/comment/"+id);
}
export function deleteComment(id){
    return instance.delete("/comment/"+id);
}
// export function login_with_google(){
//     return axios.get(`http://localhost:8000/auth/google`);
// }
// export function github_profile(){
//     return axios.get(`http://localhost:8000/github/profile`);
// }