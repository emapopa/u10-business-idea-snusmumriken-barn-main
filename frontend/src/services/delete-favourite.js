import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";


export default function deleteFavourite(favouritesID) {
    /*   let bodyFormData = new FormData();
      bodyFormData.append('id', favouritesID); */




    return axios({
        method: "post",
        url: `${API_URL}delete-favourites/${favouritesID}`,
        headers: {
            "Content-Type": "multipart/form-data",
            ...authHeader()
        }
    })
}
