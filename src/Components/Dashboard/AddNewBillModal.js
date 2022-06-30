import React from "react";
import logo from "../../Assets/Images/logo.png";
import { toast } from "react-toastify";
const AddNewBillModal = ({ refetch }) => {
  const handleAddBilling = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.number.value;
    const bill = event.target.bill.value;
    const billInfo = {
      name: name,
      email: email,
      phone: phoneNumber,
      bill: bill,
    };
    fetch("http://localhost:5000/api/add-billing", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(billInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`New Bill Added Successfully.`);
          refetch();
          event.target.reset();
        } else {
          toast.error(`Sorry ! Something went wrong .Try Again`);
        }
      });
  };
  return (
    <div className="w-[180px]">
      <input type="checkbox" id="addNewBill" class="modal-toggle shadow-2xl" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="addNewBill"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <img className="w-[150px] mx-auto" src={logo} alt="" />
            <h2 className="text-center text-xl font-bold my-2 uppercase">
              Add New Bill
            </h2>
            <form
              onSubmit={handleAddBilling}
              className="flex flex-wrap justify-center mt-3"
            >
              <input
                required
                type="text"
                name="name"
                placeholder="Customer Name"
                className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Type Customer Email"
                className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <input
                required
                type="number"
                name="number"
                placeholder="Contact Number"
                className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <input
                required
                type="number"
                name="bill"
                placeholder="Bill Amount $"
                className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <button
                type="submit"
                className=" mb-3 border-2 mx-auto w-[90%] px-3 py-1 btn"
              >
                Add Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBillModal;
