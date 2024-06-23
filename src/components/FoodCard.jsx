import { useRouter } from "next/router";
export default function FoodCard({ food }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/makanan/${food.id}`);
  };

  return (
    <div className="w-64 self-stretch rounded-2xl bg-aliceblue box-border overflow-hidden flex flex-col items-center justify-start pt-[18px] px-4 pb-[19px] relative gap-[10px]  border-[1px] border-solid border-aliceblue bg-red-200 ">
      <img
        src={food?.imageUrl}
        alt="food image"
        className="w-20 h-20 mb-4 rounded-full"
      ></img>
      <h2 className="mb-2 text-lg font-medium">{`${food?.name}`}</h2>
      <div className="flex space-x-2">
        <p
          className="px-4 py-2 text-white bg-blue-500 rounded-lg cursor-pointer"
          onClick={onClick}
        >
          View
        </p>
      </div>
    </div>
  );
}
