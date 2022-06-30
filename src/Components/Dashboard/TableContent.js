import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const TableContent = ({ data, setEditBill }) => {
  return (
    <div className="mt-5 px-2">
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((b) => (
              <tr key={b?._id}>
                <th>{b?._id}</th>
                <td>{b?.name}</td>
                <td>{b?.email}</td>
                <td>{b?.phone}</td>
                <td>{b?.bill}</td>
                <td className="flex justify-between">
                  <div className="flex w-[140px] justify-between ">
                    <label
                      for="editBill"
                      class="btn modal-button btn-sm w-[60px] px-2 py-1 border-2 rounded-md bg-green-600 text-white text-normal "
                    >
                      Edit
                    </label>
                    <button
                      onClick={setEditBill(b)}
                      className="w-[60px] px-2 py-1 border-2 rounded-md bg-red-600 flex justify-center items-center"
                    >
                      <BsFillTrashFill size={18} color="white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContent;
