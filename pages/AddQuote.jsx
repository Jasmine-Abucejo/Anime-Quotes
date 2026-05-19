import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAnimeStore from "../store/useAnimeStore";

const AddQuote = () => {
  const addQuote = useAnimeStore((state) => state.addQuote);

  const [form, setForm] = useState({
    animeName: "",
    characterName: "",
    quote: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.quote || !form.characterName) return;

    addQuote({
      id: Date.now(),
      ...form,
    });

    // reset form
    setForm({
      animeName: "",
      characterName: "",
      quote: "",
      image: "",
    });

    toast.success("Successfully added new quote!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Anime Quote</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="animeName"
          value={form.animeName}
          onChange={handleChange}
          placeholder="Anime Name"
          className="border p-2 rounded"
        />

        <input
          name="characterName"
          value={form.characterName}
          onChange={handleChange}
          placeholder="Character Name"
          className="border p-2 rounded"
        />

        <textarea
          name="quote"
          value={form.quote}
          onChange={handleChange}
          placeholder="Quote"
          className="border p-2 rounded h-24"
        />

        <button
          type="submit"
          className="bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
        >
          Add Quote
        </button>
      </form>
    </div>
  );
};

export default AddQuote;
