import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";


export default function addReview(title, body, rating, id) {
    let bodyFormData = new FormData();
    bodyFormData.append('title', title);
    bodyFormData.append('body', body);
    bodyFormData.append('rating', rating);
    bodyFormData.append('snuses_id', id);

    return axios({
        method: "post",
        url: `${API_URL}store-reviews`,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            ...authHeader()
        }
    })
};