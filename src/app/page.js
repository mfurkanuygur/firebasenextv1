import Navbar from "@/components/Navbar";
import RenderProduct from "@/components/renderProduct/RenderProduct";
import { maindatabase } from "@/firebase.config";
import { addNewUser, createUser, handleSignout, signUser } from "@/lib/form";
import { collection, addDoc, getDocs } from "firebase/firestore";

async function getProducts() {
  const products = await getDocs(collection(maindatabase, "products"));
  return products
}

export default async function Home() {
  const products = await getProducts()
  // const products = await getDocs(collection(maindatabase, "products"));
  // products.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.data().title);
  // });
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-slate-200">
      <section className="grid grid-cols-2">
        {
          // products.docs.map((doc) => (
          //   <div key={doc.id}> {doc.data().first} {doc.data().last}</div>
          // ))
          products.docs.map((doc) => (
            // doc.data() is never undefined for query doc snapshots
            <RenderProduct key={doc.id} product={doc.data()} productID={doc.id} />
          ))
        }
      </section>
      {/* <h1>veri ekleme</h1>
      <form className="flex flex-col bg-slate-600 w-2/3" action={addNewUser}>
        <input type="text" placeholder="isim gir" name="userName" />
        <input type="text" placeholder="soyisim gir" name="userSurname" />
        <button className="w-min">ekle</button>
      </form>
      <div className="bg-orange-400">
        
      </div>
      <hr />

     
      <form action={handleSignout} className="my-6 py-4"><button className="bg-yellow-400" >çıkış yap</button></form>

      <hr /> */}

    </main>
  );
}

