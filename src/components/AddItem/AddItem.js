import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://aqueous-journey-35546.herokuapp.com/inventory`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>add new items</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='my-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input  placeholder='Price' type="number" {...register("price")} />
                <input className='my-2'  placeholder='Supplier' {...register("supplier")} />
                <input placeholder='Photo Url'type="text" {...register("img")} />
                <textarea className='my-2'  placeholder='Description' {...register("description")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;