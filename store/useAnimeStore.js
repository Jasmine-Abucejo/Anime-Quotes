import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAnimeStore = create(
  persist(
    (set) => ({
      animeQuotes: [
        {
          id: 1779191318070,
          animeName: "Witch Hat Atelier",
          characterName: "Qifrey",
          quote: "There is no better teacher than life itself.",
        },
        {
          id: 1779191209074,
          animeName: "Hell's Paradise S2",
          characterName: "Tamiya Gantetsusai",
          quote:
            "It's just easier to control an uncertain enemy than an uncertain ally.",
        },
        {
          id: 1779188565568,
          animeName: "Attack on Titan",
          characterName: "Erwin Smith",
          quote:
            "If you begin to regret, you'll dull your future decisions and let others make your choices for you. All that's left for you then is to die.",
        },
      ],

      addQuote: (newQuote) =>
        set((state) => ({
          animeQuotes: [...state.animeQuotes, newQuote],
        })),

      deleteQuote: (id) =>
        set((state) => ({
          animeQuotes: state.animeQuotes.filter((item) => item.id !== id),
        })),

      updateQuote: (id, updatedData) =>
        set((state) => ({
          animeQuotes: state.animeQuotes.map((item) =>
            item.id === id ? { ...item, ...updatedData } : item,
          ),
        })),
    }),
    {
      name: "anime-quotes-storage",
    },
  ),
);

export default useAnimeStore;
