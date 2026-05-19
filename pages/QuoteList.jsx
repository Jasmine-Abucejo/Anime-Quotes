import { useState, useEffect } from "react";
import QuoteCard from "../components/QuoteCard";
import useAnimeStore from "../store/useAnimeStore";

const QuoteList = () => {
  const animeQuotes = useAnimeStore((state) => state.animeQuotes);
  //   const [animeQuotes, setAnimeQuotes] = useState([
  //     {
  //       _id: 0,
  //       animeName: "Witch Hat Atelier",
  //       characterName: "Qifrey",
  //       quote: "There is no better teacher than life itself.",
  //       image:
  //         "https://cdn.myanimelist.net/r/200x268/images/characters/8/611698.jpg?s=dcafdefef93a8bab741a6cb982e53cc6",
  //     },
  //     {
  //       _id: 1,
  //       animeName: "Hell's Paradise S2",
  //       characterName: "Tamiya Gantetsusai",
  //       quote:
  //         "It's just easier to control an uncertain enemy than an uncertain ally.",
  //       image:
  //         "https://static.wikia.nocookie.net/p__/images/6/67/Hell%27s_Paradise_anime_Tamiya_Gantetsusai_render.webp/revision/latest?cb=20260111235925&path-prefix=protagonist",
  //     },
  //   ]);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4  2xl:grid-cols-5 md:grid-cols-3 p-4 gap-4  items-start">
        {animeQuotes.map((quote) => (
          <QuoteCard key={quote.id} item={quote} />
        ))}
      </div>
    </div>
  );
};

export default QuoteList;
