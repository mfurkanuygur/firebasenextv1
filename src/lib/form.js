"use server"
import { collection, addDoc, updateDoc, arrayUnion, doc, setDoc, getDoc } from "firebase/firestore";
import { maindatabase } from "@/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const auth = getAuth()

export const addNewUser = async (formData) => {
    const { userName, userSurname } = Object.fromEntries(formData)
    try {
        const docRef = await addDoc(collection(maindatabase, "tests"), {
            first: userName,
            last: userSurname,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export const createUser = async (formData) => {
    const { name, email, password } = Object.fromEntries(formData)
    console.log(name, email, password)
    try {

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const USERTOKEN = user.uid
                console.log("kullanıcı uid", user.uid)
                setDoc(doc(maindatabase, "users", USERTOKEN), {
                    uid: USERTOKEN,
                    email: email,
                    username: name,
                    basket: [],// Boş bir sepet
                    favs: []// Boş bir fav
                });
                cookies().set('userToken', USERTOKEN, {
                    httpOnly: false,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60 * 24, // 1 gün
                    path: '/',
                })

            })
    } catch (error) {
        console.log(error)
    }
    if (auth?.currentUser?.uid) {
        console.log("Başarıyla kayıt oldun. Anasayfaya gideceksin")
        redirect("/")
    }

}

export const signUser = async (formData) => {
    const { email, password } = Object.fromEntries(formData)

    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const USERTOKEN = user.uid
                console.log("kullanıcı uid", user.uid)
                console.log("başarı ile giriş yapıldı")

                cookies().set('userToken', USERTOKEN, {
                    httpOnly: false,
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: 60 * 60 * 24, // 1 gün
                    path: '/',
                })
            })

    } catch (error) {
        console.log(error)
    }
    if (auth?.currentUser?.uid) {
        console.log("Kayıtlı kullanıcı hosgeldin")
        redirect("/")

    }
    else {
        console.log("Kayıtlı kullanıcı olmadığın için giriş yapamıyorsun. Önce kayıt ol")
    }
}

export const handleSignout = async () => {
    "use server"
    signOut(auth).then(() => {
        console.log("başarı ile çıkış yapıldı")
        cookies().delete("userToken")
    }).catch((error) => {
        console.log(error)
    });
}

