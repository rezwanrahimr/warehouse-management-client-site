import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

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
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Add New Items</h2>

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
        <input type="submit" className="btn btn-success" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
