import React from "react";
import { toast } from "react-toastify";
const DeleteBillModal = ({ refetch, editBill }) => {
  const handleDelete = async (id) => {
    const res = await fetch(
      `https://arrogant-inukshuk-10910.herokuapp.com/api/delete-billing/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await res.json();
    if (result?.success) {
      // refetch();
      toast.success(result?.message);
    } else {
      toast.error(result?.error);
    }
  };

  return (
    <div>
      <div>
        <input type="checkbox" id="deleteBilling" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-500">
              Are you Sure you want to remove the bill {editBill?._id} ?
            </h3>
            <p className="py-4">
              Please note That deleting Bill Info won't be back!
            </p>
            <div className="modal-action">
              <label
                htmlFor="deleteBilling"
                onClick={() => handleDelete(editBill._id)}
                className="btn btn-xs btn-error"
              >
                Confirm
              </label>
              <label htmlFor="deleteBilling" className="btn btn-xs">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBillModal;
