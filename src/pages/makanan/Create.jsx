import NavBar from "@/components/NavBar";
import FoodForm from "@/components/FoodForm";

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
