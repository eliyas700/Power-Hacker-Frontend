import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
const TableContent = () => {
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
            <tr>
              <th>1343</th>
              <td>Eliyas Hossain</td>
              <td>eliyashossain700@gmail.com</td>
              <td>01862450175</td>
              <td>1200</td>
              <td className="flex justify-between">
                <div className="flex w-[140px] justify-between ">
                  <label
                    for="editBill"
                    class="btn modal-button btn-sm w-[60px] px-2 py-1 border-2 rounded-md bg-green-600 text-white text-normal "
                  >
                    Edit
                  </label>
                  <button className="w-[60px] px-2 py-1 border-2 rounded-md bg-red-600 flex justify-center items-center">
                    <BsFillTrashFill size={18} color="white" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContent;
