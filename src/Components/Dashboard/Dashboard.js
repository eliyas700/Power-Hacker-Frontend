import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo.png";
import TableContent from "./TableContent";
import { AiOutlinePlus } from "react-icons/ai";
import EditBillModal from "./EditBillModal";
import { useQuery } from "react-query";
import AddNewBillModal from "./AddNewBillModal";
import DeleteBillModal from "./DeleteBillModal";
const Dashboard = () => {
  const [editBill, setEditBill] = useState({});
  const [data, setData] = useState([]);

  const [pagesCount, setPagesCount] = useState(0);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    fetch(
      "https://arrogant-inukshuk-10910.herokuapp.com/api/billing-pagination"
    )
      .then((res) => res.json())
      .then((data) => {
        const pages = Math.ceil(data?.count / 10);
        setPagesCount(pages);
      });
  }, [pages, data]);

  useEffect(() => {
    fetch(
      `https://arrogant-inukshuk-10910.herokuapp.com/api/billing-list?page=${pages}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data, pages]);

  let sum = 0;

  {
    data?.forEach((element) => {
      sum += parseInt(element?.bill);
    });
  }

  const [search, setSearch] = useState("");

  const searchedItem = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.email.toLowerCase().includes(search) ||
        item.phone.toLowerCase().includes(search)
    );
  };

  return (
    <div className="w-[96%] mx-auto my-4 shadow-lg mini-h-[90vh] border-2">
      <div className="flex justify-between items-center bg-[#95a5a6]">
        <img className="w-[220px]" src={logo} alt="" />
        <p className="text-white text-xl pr-4">Total Paid : {sum}$</p>
      </div>
      <div className="flex justify-between items-center mt-8 px-4 w-[100%]">
        <div className="flex items-center">
          <p className="pr-2 text-lg">Billing</p>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="w-[150px] px-2 border-2 py-[2px]"
          />
        </div>
        <div>
          <label for="addNewBill" class="btn modal-button btn-sm ml-0">
            <AiOutlinePlus size={14} /> Add New Bill
          </label>
        </div>
      </div>
      <TableContent
        pages={pages}
        setPages={setPages}
        pagesCount={pagesCount}
        setPagesCount={setPagesCount}
        data={searchedItem(data)}
        setEditBill={setEditBill}
      />
      <EditBillModal
        // refetch={refetch}
        setEditBill={setEditBill}
        editBill={editBill}
      />
      <AddNewBillModal
      // refetch={refetch}
      />
      <DeleteBillModal
        // refetch={refetch}
        setEditBill={setEditBill}
        editBill={editBill}
      />
    </div>
  );
};

export default Dashboard;
