import { useState, useEffect } from "react";
import {
  useFilterProductByTitleQuery,
  useGetProductsQuery,
} from "@/entities/product";

export function useFilterByName(perPage = 6) {
  const [page, setPage] = useState(1);
  const [cursors, setCursors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: filteredData, isLoading: isSearching } =
    useFilterProductByTitleQuery(searchQuery, { skip: !searchQuery });
  const { data: paginatedData, isLoading: isLoadingPaginated } =
    useGetProductsQuery({ page, perPage, cursors }, { skip: !!searchQuery });

  const products = searchQuery ? filteredData || [] : paginatedData?.data || [];
  const hasMore = searchQuery ? false : paginatedData?.hasMore || false;

  console.log("Search query:", searchQuery);
  console.log("Filtered data:", filteredData);

  useEffect(() => {
    if (!searchQuery && paginatedData?.cursor && cursors.length < page) {
      setCursors((prev) => [...prev, paginatedData.cursor]);
    }
    if (!searchQuery && paginatedData?.data.length === 0 && page > 1) {
      setPage((p) => p - 1);
    }
  }, [paginatedData, page, cursors, searchQuery]);

  return {
    products,
    page,
    setPage,
    hasMore,
    isLoading: isSearching || isLoadingPaginated,
    searchQuery,
    setSearchQuery,
  };
}
