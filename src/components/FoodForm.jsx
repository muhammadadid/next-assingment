import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FoodForm({ defaultFormData, isEdit }) {
  const router = useRouter();
  const [fromData, setFromData] = useState(defaultFormData);
  const onSubmit = async (e) => {
    e.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const res = await axios.post(
      isEdit ? urlEdit : urlCreate,
      {
        name: fromData.name,
        imageUrl: fromData.imageUrl,
        description:  fromData.description,
        ingredients: fromData.ingredients,
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    console.log(res);
    if (res.data.code === "200") router.push("/");
  };
  const handleDelete = async () => {
    if (isEdit) {
      const urlDelete = `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${router.query.id}`;
      const res = await axios.delete(urlDelete, {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      });
      if (res.data.code === "200") router.push("/");
    }
  };

  return (
    // 
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-black">{isEdit ? 'Edit Food' : 'Create New Food'}</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input 
            type="text"
            className="w-full p-2 mb-2 text-black border rounded"
            placeholder="Name"
            name="name"
            value={fromData.name}
            onChange={(e) =>
                      setFromData({ ...fromData, name: e.target.value })}
          />
          <textarea 
            className="w-full p-2 mb-2 text-black border rounded"
            placeholder="Description"
            name="description"
            value={fromData.description}
            onChange={(e) => setFromData({ ...fromData, description: e.target.value })}
          />
          <input 
            type="text"
            className="w-full p-2 mb-2 text-black border rounded"
            placeholder="Image URL"
            name="imageUrl"
            value={fromData.imageUrl}
            onChange={(e)=> setFromData({ ...fromData, imageUrl: e.target.value })}
          />
          <input 
            type="text"
            className="w-full p-2 mb-2 text-black border rounded"
            placeholder="Ingredients (comma separated)"
            name="ingredients"
            value={fromData.ingredients}
            onChange={(e) => setFromData({ ...fromData, ingredients: e.target.value.split(',') })}
          />
        </div>
        <button type="submit" className="p-2 mr-2 text-white bg-blue-500 rounded">{isEdit ? 'Update' : 'Create'}</button>
        {isEdit && <button type="button" onClick={handleDelete} className="p-2 text-white bg-red-500 rounded">Delete</button>}
      </form>
    </div>
  );
}
