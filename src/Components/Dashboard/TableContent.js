import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const TableContent = ({
  setEditBill,
  pagesCount,
  setPagesCount,
  pages,
  setPages,
  data,
}) => {
  return (
    <div className="mt-5 px-2">
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>SR</th>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((b, index) => (
              <tr key={b?._id}>
                <th>{index + 1 + pages * 10}</th>
                <th>{b?._id}</th>
                <td>{b?.name}</td>
                <td>{b?.email}</td>
                <td>{b?.phone}</td>
                <td>{b?.bill}</td>
                <td className="flex justify-between">
                  <div className="flex w-[140px] justify-between ">
                    <label
                      for="editBill"
                      onClick={() => setEditBill(b)}
                      class="btn modal-button btn-sm w-[60px] px-2 py-1 border-2 rounded-md bg-green-600 text-white text-normal "
                    >
                      Edit
                    </label>

                    <label
                      for="deleteBilling"
                      onClick={() => setEditBill(b)}
                      className="w-[60px] px-2 py-1 border-2 rounded-md bg-red-600 flex justify-center items-center"
                    >
                      <BsFillTrashFill size={18} color="white" />
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[220px] mx-auto my-4">
        <div class="btn-group">
          {[...Array(pagesCount).keys()].map((num) => (
            <button
              className={pages === num ? "page-active" : "btn-page"}
              onClick={() => setPages(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableContent;
