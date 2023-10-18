import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="gap-y2 grid grid-cols-2 gap-x-4">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default categories;
