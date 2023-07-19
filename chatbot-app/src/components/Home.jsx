import bot from '../images/home_bot.png';

export default function Home() {
  return (
    <main className="h-fit mx-auto flex flex-col items-center justify-around">
      <img
        className="m-auto pt-10"
        src={bot}
        alt="Imagem de cachorro gerada aleatoriamente"
      />
      <a
        className="text-center text-sky-900 text-3xl  sm:text-5xl font-extrabold hover:scale-110"
        href="/chat"
      >
        Vamos conversar?
      </a>
    </main>
  );
}
