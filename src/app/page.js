import Navbar from "@/components/Navbar";
import { maindatabase } from "@/firebase.config";
import { addNewUser, createUser, handleSignout, signUser } from "@/lib/form";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function Home() {
  const tests = await getDocs(collection(maindatabase, "tests"), { store: "no-cache" });

  return (
    <main>
      <h1>veri ekleme</h1>
      <form className="flex flex-col bg-slate-600 w-2/3" action={addNewUser}>
        <input type="text" placeholder="isim gir" name="userName" />
        <input type="text" placeholder="soyisim gir" name="userSurname" />
        <button className="w-min">ekle</button>
      </form>
      <div className="bg-orange-400">
        {
          tests.docs.map((doc) => (
            <div key={doc.id}> {doc.data().first} {doc.data().last} {doc.data().born}</div>
          ))
        }
      </div>
      <hr />

      <div className="flex flex-col justify-center text-center py-6 bg-red-400">
        <h1>yeni kullanıcı</h1>
        <form className="flex flex-col bg-slate-600 w-full" action={createUser}>
          <input type="text" placeholder="name gir" name="name" />
          <input type="text" placeholder="email gir" name="email" />
          <input type="text" placeholder="password gir" name="password" />
          <button className="w-min">ekle</button>
        </form>

      </div>
      <form action={handleSignout} className="my-6 py-4"><button className="bg-yellow-400" >çıkış yap</button></form>

      <hr />
      <div className="flex flex-col justify-center text-center py-6 bg-red-400">
        <h1>varolan kullanıcı</h1>
        <form className="flex flex-col bg-slate-600 w-2/3" action={signUser}>
          <input type="text" placeholder="email gir" name="email" />
          <input type="text" placeholder="password gir" name="password" />
          <button className="w-min">gir</button>
        </form>
      </div>
      <Navbar />
    </main>
  );
}

