import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Dex from "src/components/Dex";
import DOM from "src/components/api/dom";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center  relative justify-center bg-slate-900">
      <Header />
      <Dex />
      <Footer />
      <DOM />
    </main>
  );
}
