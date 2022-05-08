import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Add Item Section ! Added A New Item.
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log({ ...data, email: user.email });
    const url = `https://aqueous-journey-35546.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, email: user.email }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast('ITEM ADDED...')
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="fw-bold my-2 bg-light py-3 mb-4">Add New Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="form-control"
          {...register("name")}

        />
        <input
          className="my-2 form-control"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          placeholder="Price"
          className="form-control"
          type="number"
          {...register("price")}
        />
        <input
          className="my-2 form-control"
          placeholder="Supplier"
          {...register("supplier")}
        />
        <input
          placeholder="Photo Url"
          className="form-control"
          type="text"
          {...register("img")}
        />
        <textarea
          className="my-2 form-control"
          placeholder="Description"
          {...register("description")}

        />
        <input type="submit" className="btn btn-primary fw-bold mb-5" value="Submit" />
      </form>
      <ToastContainer />
    </div>

  );
};

export default AddItem;
