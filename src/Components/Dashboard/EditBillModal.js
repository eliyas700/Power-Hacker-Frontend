import React from "react";
import { toast } from "react-toastify";
import logo from "../../Assets/Images/logo.png";
const EditBillModal = ({ editBill, refetch }) => {
  const handleSubmit = (event) => {
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
    const id = editBill?._id;
    //Send Data to the Server Site
    const url = `http://localhost:5000/api/update-billing/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(billInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`${editBill?._id} Updated Successfully!`);
          // refetch();
          event.target.reset();
        } else {
          toast.error(`Sorry ! Something went wrong .Try Again`);
        }
      });
  };

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
                Edit Bill {editBill?.name}
              </h2>
              <form
                onSubmit={handleSubmit}
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
