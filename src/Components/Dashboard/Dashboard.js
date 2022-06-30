import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import TableContent from "./TableContent";
import { AiOutlinePlus } from "react-icons/ai";
import EditBillModal from "./EditBillModal";
import { useQuery } from "react-query";
import AddNewBillModal from "./AddNewBillModal";
const Dashboard = () => {
  const [editBill, setEditBill] = useState({});
  const { data, refetch } = useQuery("bills", () =>
    fetch("http://localhost:5000/api/billing-list").then((res) => res.json())
  );

  return (
    <div className="w-[96%] mx-auto my-4 shadow-lg h-[90vh] border-2">
      <div className="flex justify-between items-center bg-[#95a5a6]">
        <img className="w-[220px]" src={logo} alt="" />
        <p className="text-white text-xl pr-4">Total Paid : 1200$</p>
      </div>
      <div className="flex justify-between items-center mt-8 px-4 w-[100%]">
        <div className="flex items-center">
          <p className="pr-2 text-lg">Billing</p>
          <input
            type="text"
            placeholder="Search"
            className="w-[150px] px-2 border-2 py-[2px]"
          />
          <button className="btn-sm btn ml-2">Search</button>
        </div>
        <div>
          <label for="addNewBill" class="btn modal-button btn-sm ml-0">
            <AiOutlinePlus size={14} /> Add New Bill
          </label>
        </div>
      </div>
      <TableContent data={data} setEditBill={setEditBill} />
      <EditBillModal
        refetch={refetch}
        setEditBill={setEditBill}
        editBill={editBill}
      />
      <AddNewBillModal refetch={refetch} />
    </div>
  );
};

export default Dashboard;
