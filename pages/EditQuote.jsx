import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAnimeStore from "../store/useAnimeStore";
import toast, { Toaster } from "react-hot-toast";

function EditQuotePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { animeQuotes, updateQuote } = useAnimeStore();

  const existingQuote = animeQuotes.find((q) => q.id === Number(id));

  const [form, setForm] = useState({
    animeName: "",
    characterName: "",
    quote: "",
  });

  // preload data
  useEffect(() => {
    if (existingQuote) {
      setForm({
        animeName: existingQuote.animeName || "",
        characterName: existingQuote.characterName || "",
        quote: existingQuote.quote || "",
      });
    }
  }, [existingQuote]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateQuote(Number(id), form);
    toast.success("Successfully edited this quote!");
    navigate("/");
  };

  if (!existingQuote) return <div>Quote not found</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Edit Quote</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="animeName"
          value={form.animeName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="characterName"
          value={form.characterName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <textarea
          name="quote"
          value={form.quote}
          onChange={handleChange}
          className="border p-2 rounded h-24"
        />

        <button className="bg-blue-600 text-white py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditQuotePage;
