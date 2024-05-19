"use client"

import { maindatabase } from "@/firebase.config"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import Cookies from "js-cookie";

const Navbar = () => {

    const addItem = () => {
        const uid = Cookies.get('userToken');
        console.log('User Token:', uid);

        const item = "elma54ş"
        try {

            const userDoc = doc(maindatabase, "users", uid);
            updateDoc(userDoc, {
                cart: arrayUnion(item)
            });
            console.log(`Item '${item}' added to the cart of user with UID: ${uid}`);
        } catch (error) {
            console.log("Error updating cart: ", error);
        }
    }
    return (
        <div>
            <h1>sepete ürün ekle</h1>
            <button onClick={addItem}>item ekle</button>
        </div>
    )
}

export default Navbar