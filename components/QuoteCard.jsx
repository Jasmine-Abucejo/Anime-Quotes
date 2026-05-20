import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAnimeStore from "../store/useAnimeStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const QuoteCard = ({ item }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const deleteQuote = useAnimeStore((state) => state.deleteQuote);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/edit/${item.id}`);
  };

  const handleDelete = () => {
    deleteQuote(item.id);
    setShowDeleteModal(false);
    toast.success("Successfully deleted quote");
  };
  return (
    <div>
      <div
        key={item.id}
        className={`group w-full  bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 pb-2  ${
          expanded ? "h-auto" : "h-[240px]"
        }`}
      >
        <div className="w-full h-6 bg-amber-600">
          <div className=" flex gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition z-20 opacity-100 ">
            <button
              className="text-s bg-black/60 text-white px-2 py-1 rounded"
              onClick={handleEdit}
            >
              <FaEdit />
            </button>
            <button
              className="text-s bg-red-500/80 text-white px-2 py-1 rounded"
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteModal(true);
              }}
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>

        <div className="  w-full flex flex-col">
          <div className="flex flex-col items-center px-5 pt-5 pb-4 text-center gap-3 ">
            {item.quote && (
              <p
                className={`text-lg md:text-xl italic font-medium text-gray-800 leading-relaxed transition-all duration-300 cursor-pointer  ${expanded ? "" : "line-clamp-3 lg:line-clamp-4"}`}
                onClick={() => setExpanded(!expanded)}
              >
                “{item.quote}”
              </p>
            )}

            {item.characterName && (
              <p className="text-sm font-semibold text-gray-700 ">
                — {item.characterName}
              </p>
            )}

            {/* Anime source */}
            {item.animeName && (
              <p className="text-xs text-gray-500 tracking-wide uppercase ">
                Source: {item.animeName}
              </p>
            )}
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Delete Quote?
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Are you sure you want to delete this quote?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
