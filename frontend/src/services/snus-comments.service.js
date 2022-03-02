import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

export default function addComment(body, id) {
    let bodyFormData = new FormData();
    bodyFormData.append('body', body);
    bodyFormData.append('posts_id', id);

    return axios({
        method: "post",
        url: `${API_URL}store-comments`,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            ...authHeader()
        }
    })    
}
