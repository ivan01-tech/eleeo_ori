import React, { lazy, useState, useEffect, useCallback } from "react";
import { data } from "../../data";

const Paging = lazy(() => import("../../components/Paging"));
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const FilterCategory = lazy(() => import("../../components/filter/Category"));
const FilterPrice = lazy(() => import("../../components/filter/Price"));
const FilterSize = lazy(() => import("../../components/filter/Size"));
const FilterClear = lazy(() => import("../../components/filter/Clear"));
const CardServices = lazy(() => import("../../components/card/CardServices"));
const CardProductGrid = lazy(() =>
  import("../../components/card/CardProductGrid")
);
const CardProductList = lazy(() =>
  import("../../components/card/CardProductList")
);

const ProductListView = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [view, setView] = useState("list");

  const getProducts = useCallback(() => {
    let products = data.products;
    for (let i = 0; i < 5; i++) {
      products = products.concat(products);
    }
    return products;
  }, []);

  useEffect(() => {
    const totalItems = getProducts().length;
    setTotalItems(totalItems);
  }, [getProducts]);

  const onPageChanged = (page) => {
    let products = getProducts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);
    setCurrentPage(currentPage);
    setCurrentProducts(currentProducts);
    setTotalPages(totalPages);
  };

  const onChangeView = (view) => {
    setView(view);
  };

  return (
    <>
      <div
        className="p-5 bg-primary bs-cover"
        style={{
          backgroundImage: "url(../../images/banner/50-Banner.webp)",
        }}
      >
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">
            T-Shirts
          </span>
        </div>
      </div>
      <Breadcrumb />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory />
            <FilterPrice />
            <FilterSize />
            {/* <FilterStar /> */}
            {/* <FilterColor /> */}
            <FilterClear />
            {/* <FilterTag /> */}
            <CardServices />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-7">
                <span className="align-middle fw-bold">
                  {totalItems} résultats pour{" "}
                  <span className="text-warning">"t-shirts"</span>
                </span>
              </div>
              <div className="col-5 d-flex justify-content-end">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Les plus populaires</option>
                  <option value={2}>Derniers articles</option>
                  <option value={3}>Tendance</option>
                  <option value={4}>Prix croissant</option>
                  <option value={4}>Prix décroissant</option>
                </select>
                <div className="btn-group ms-3" role="group">
                  <button
                    aria-label="Grille"
                    type="button"
                    onClick={() => onChangeView("grid")}
                    className={`btn ${
                      view === "grid" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <i className="bi bi-grid" />
                  </button>
                  <button
                    aria-label="Liste"
                    type="button"
                    onClick={() => onChangeView("list")}
                    className={`btn ${
                      view === "list" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <i className="bi bi-list" />
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row g-3">
              {view === "grid" &&
                currentProducts.map((product, idx) => (
                  <div key={idx} className="col-md-4">
                    <CardProductGrid data={product} />
                  </div>
                ))}
              {view === "list" &&
                currentProducts.map((product, idx) => (
                  <div key={idx} className="col-md-12">
                    <CardProductList data={product} />
                  </div>
                ))}
            </div>
            <hr />
            <Paging
              totalRecords={totalItems}
              pageLimit={9}
              pageNeighbours={3}
              onPageChanged={onPageChanged}
              sizing=""
              alignment="justify-content-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListView;
