import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="flex items-center justify-center gap-20 px-4">
        <div className="flex flex-col gap-8">
          <p className="max-w-screen-sm text-5xl">
            Olá meu nome é pierre Souza e construo páginas web
          </p>
          <p className="max-w-screen-sm text-lg">
            Eu sou formado em Análise e desenvolvimento de sistemas e trabalho
            como desenvolvedor front-end desde 2022.
          </p>
        </div>
        <img
          src="https://github.com/pierresouza.png"
          alt=""
          className="w-96 rounded-full"
        />
      </div>
      <About />
      <Footer />
    </div>
  );
}
