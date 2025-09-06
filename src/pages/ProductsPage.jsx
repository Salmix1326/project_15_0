import { AddProductButton } from "@/features/product/add-product/ui/AddProductButton";
import SortByNameField from "@/features/product/sort-by-name/ui/SortByNameField";
import { ProductList } from "@/widgets/ProductListWidget/ProductList";
import { useFilterByName } from "@/features/product/sort-by-name/model/useFilterByName";
export default function ProductsPage() {
  const perPage = 6;
  const {
    products,
    page,
    setPage,
    hasMore,
    isLoading,
    searchQuery,
    setSearchQuery,
  } = useFilterByName(perPage);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {" "}
      <div className="flex items-center justify-between mb-6">
        {" "}
        <h2 className="text-3xl font-bold text-white">Products List</h2>{" "}
        <AddProductButton /> <SortByNameField onChangeValue={setSearchQuery} />{" "}
      </div>{" "}
      <ProductList
        products={products}
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        isLoading={isLoading}
      />{" "}
    </div>
  );
}
