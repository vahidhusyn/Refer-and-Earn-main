import axios from 'axios'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
  })
  .required();

const saveUser = async data => {
  try {
    const response = await axios.post('http://localhost:8000/users', data);
    console.log(data)
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}


export default function ReferForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(saveUser)} className="grid place-content-center gap-5">
      <div className="grid place-content-between">
        <input {...register("name")} placeholder='name' className="p-2 text-stone-500"/>
        <p>{errors.lastName?.message}</p>
      </div>

      <input {...register("email")} placeholder='email' className="p-2 text-stone-500"/>
      <p>{errors.email?.message}</p>

      <input type="submit" />
    </form>
  );
}
