import React from "react";
import logo from "../../Assets/Images/logo.png";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const AddNewBillModal = ({ refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    const name = data?.name;
    const email = data?.email;
    const phoneNumber = data?.number;
    const bill = data?.amount;
    console.log(name, email, phoneNumber, bill);

    const billInfo = {
      name: name,
      email: email,
      phone: phoneNumber,
      bill: bill,
    };
    fetch("https://arrogant-inukshuk-10910.herokuapp.com/api/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(billInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`New Bill Added Successfully.`);
          // refetch();
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
            {/* <form
              onSubmit={handleAddBilling}
              className="flex flex-wrap justify-center mt-3"
            >
              <input
                required
                type="text"
                name="name"
                placeholder="Customer Name"
                className="  border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Type Customer Email"
                className="  border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <input
                required
                type="number"
                name="number"
                placeholder="Contact Number"
                className="  border-2 mx-auto w-[90%] px-3 py-1 "
              />
              <input
                required
                type="number"
                name="bill"
                placeholder="Bill Amount $"
                className="  border-2 mx-auto w-[90%] px-3 py-1 "
              />
              
            </form> */}
            <form
              className="flex flex-wrap justify-center mt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control w-[90%]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="  border-2 mx-auto  px-3 py-1 w-[100%] "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-[90%]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className=" w-[100%] border-2 mx-auto px-3 py-1 "
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-[90%]">
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="  border-2 mx-auto  px-3 py-1 w-[100%] "
                  {...register("number", {
                    required: {
                      value: true,
                      message: " Contact Number is Required",
                    },
                    minLength: {
                      value: 11,
                      message: "Must be 11 characters ",
                    },
                  })}
                />
                <label className="label">
                  {errors.number?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.number.message}
                    </span>
                  )}
                  {errors?.number?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.number.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-[90%]">
                <input
                  type="number"
                  placeholder="Paid Amount"
                  className="  border-2 mx-auto  px-3 py-1 w-[100%] "
                  {...register("amount", {
                    required: {
                      value: true,
                      message: "Paid Amount is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.amount?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.amount.message}
                    </span>
                  )}
                </label>
              </div>

              <button
                type="submit"
                className="  border-2 mx-auto w-[90%] px-3 py-1 btn"
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
