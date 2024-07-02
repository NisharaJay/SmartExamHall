import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PCAssign = () => {
  const [formData, setFormData] = useState({
    indexNumber: "",
  });

  const navigate = useNavigate();

  const handleAssign = async () => {
    try {
      const response = await fetch(
        "https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/fingerprints/manual",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("PC assigned successfully!", { position: "top-center" });
        setFormData({
          indexNumber: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to assign PC");
      }
    } catch (err) {
      console.error("Error assigning PC:", err);
      toast.error(err.message || "Error assigning PC", {
        position: "top-center",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      indexNumber: "",
    });
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <button
        className="bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 rounded-lg font-bold"
        onClick={handleBack}
      >
        Back to Home
      </button>
      <div className="flex w-full justify-center">
        <div className="flex flex-col bg-[#114960] w-full max-w-4xl p-4 rounded-xl text-black mt-5">
          <div className="bg-white rounded-xl shadow-lg p-7 text-gray-600">
            <form className="flex flex-col space-y-2">
              <div>
                <label htmlFor="indexNumber" className="text-sm font-bold">
                  Index Number:
                </label>
                <input
                  type="text"
                  name="indexNumber"
                  id="indexNumber"
                  value={formData.indexNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, indexNumber: e.target.value })
                  }
                  className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300 mb-5"
                />
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="reset"
                  className="inline-block self-start bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="inline-block self-end bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
                  onClick={handleAssign}
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCAssign;
