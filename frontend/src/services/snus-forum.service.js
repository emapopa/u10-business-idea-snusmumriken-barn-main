import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

export default function addPost(title, body, id) {
    let bodyFormData = new FormData();
    bodyFormData.append('title', title);
    bodyFormData.append('body', body);
    bodyFormData.append('categorys_id', id);

    return axios({
        method: "post",
        url: `${API_URL}store-posts`,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            ...authHeader()
        }
    })
}

