import React from "react";
import logo from "../../Assets/Images/logo.png";
const EditBillModal = () => {
  return (
    <div>
      <div className="w-[180px]">
        <input type="checkbox" id="editBill" class="modal-toggle shadow-2xl" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="editBill"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <img className="w-[150px] mx-auto" src={logo} alt="" />
              <h2 className="text-center text-xl font-bold my-2 uppercase">
                Edit Bill
              </h2>
              <form className="flex flex-wrap justify-center mt-3">
                <input
                  required
                  type="text"
                  placeholder="Customer Name"
                  className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
                />
                <input
                  required
                  type="email"
                  placeholder="Type Customer Email"
                  className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
                />
                <input
                  required
                  type="number"
                  placeholder="Contact Number"
                  className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
                />
                <input
                  required
                  type="number"
                  placeholder="Bill Amount $"
                  className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
                />
                <button
                  type="submit"
                  className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 btn"
                >
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBillModal;
