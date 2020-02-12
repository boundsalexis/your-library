import axios from "axios";

const APIkey = "AIzaSyArI9xPpFOe-eMvnp1FVwwJOBuJ_bihgo0";

export default {
    getBooks: (search) => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + search + "&key=" + APIkey)
    }
}
// aslhjkahjlkflhkjashjklasfkhljafshjkl

// GOOGLE BOOKS API REQUEST FOR A SINGLE VOLUME
// THIS HAS ALL OF THE INFORMATION WE NEED TO DISPLAY TO DOM
// GET "https://www.googleapis.com/books/v1/volumes/" + VOLUMEIDHERE + "?key=" + APIkey;

    // response[i].selfLink
    // response[i].volumeinfo.title
    // response[i].volumeinfo.authors
    // response[i].volumeinfo.description
    // response[i].volumeinfo.imageLinks.thumbnail
    

