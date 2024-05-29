import { maindatabase } from "@/firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const getUniqueUserData = async (userToken, productID, product) => {
    const userData = doc(maindatabase, "users", userToken);
    const getUserData = await getDoc(userData);
    //ürün kontrolü 
    const isProductExists = getUserData.data().basket.find(p => p.id == productID)
    if (isProductExists) {
        const updatedBasket = getUserData.data().basket.map(p => {
            if (p.id == productID) {
                return { ...p, count: p.count + 1 };
            }
            return p;
        });
        await updateDoc(userData, {
            basket: updatedBasket
        });
    }
    else {
        const newBasketProduct = {
            id: productID,
            title: product.title,
            img: product.img,
            price: product.price,
            category: product.category,
            count: 1
        };
        await updateDoc(userData, {
            basket: [...getUserData.data().basket, newBasketProduct]
        });
    }
}

export const getUserBasketData = async (userToken = null) => {
    if (userToken === null) {
        return null
    }
    else {
        const userData = doc(maindatabase, "users", userToken);
        const getUserData = await getDoc(userData);
        return getUserData.data()?.basket
    }
}