import NavBar from "@/components/NavBar";
import FoodForm from "@/components/FoodForm";
import axios from "axios";
export default function Create() {
  return (
    <div className="min-h-screen bg-slate-300">
      <NavBar />
      <FoodForm
        defaultFormData={{
          name: "",
          description: "",
          imageUrl: "",
          ingredients: "",
        }}
        isEdit={false}
      />
    </div>
  );
}
