import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
} from "../../redux/thunks/productThunk";
import selectCategories from "../Card/selectCategories";
import "../views/productsPage/ProductsPage.css";
import "./Filter.css";

const Filters = ({ setCurrentPage, setInput }) => {
  const dispatch = useDispatch();
  const { categories, filters, order, page } = useSelector(
    (state) => state.product
  );

  const activeCategories = Array.isArray(categories)
    ? categories.filter((c) => c.isActive === true)
    : categories;

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function handleOrderAlphabet(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "name",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleOrderPrice(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "price",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleOrderScore(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "score",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleChangeType(e) {
    const value = e.target.value;
    const prevCategories = (filters && filters.categories) || [];
    const newCategories = prevCategories.includes(value)
      ? prevCategories.filter((category) => category !== value)
      : prevCategories.concat(value);
    dispatch(
      fetchProducts({
        filters: {
          ...filters,
          categories: newCategories,
        },
        order,
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function clearFilter(e) {
    e.preventDefault();
    dispatch(
      fetchProducts({
        filters: {},
        order: {},
        page,
      })
    );
    e.target.reset();
    setCurrentPage(1);
    setInput(1);
  }

  return Array.isArray(categories) ? (
    <div>
      <div
        id="sidebar"
        className="col-13 d-flex flex-column py-2 text-center rounded colorletra"
      >
        <div className="row ">
          <div className="bg-dark rounded">
            <form
              onSubmit={clearFilter}
              id="form-filters-combined"
              class="ml-md-2"
            >
              <div className="mt-3 rounded-2 filterCategories">
                <h6 class="span-1 fw-bold">Categories</h6>
                <div class="container">
                  {activeCategories?.map((c) => {
                    return (
                      <div key={c._id} class="checkinput">
                        <input
                          id={`${c?._id}-category-filter`}
                          type="checkbox"
                          name="categories"
                          class="form-check-input"
                          value={c.name}
                          checked={
                            filters &&
                            filters.categories &&
                            filters.categories.includes(c.name)
                          }
                          onClick={handleChangeType}
                        />
                        <label htmlFor={`${c?._id}-category-filter`} class="form-check-label filter-input-label">
                          {selectCategories(c.name)}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="mt-3 rounded-2 orders">
                <div class="form-inline border rounded span-sm-2 my-2 checkinput">
                  <input
                    type="radio"
                    name="type"
                    value="asc"
                    id="a-z-filter"
                    onClick={handleOrderAlphabet}
                  />
                  <label
                    htmlFor="a-z-filter"
                    class="pl-1 pt-sm-0 pt-1 filter-input-label"
                  >&nbsp;A-Z</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2 checkinput">
                  <input
                    type="radio"
                    name="type"
                    value="desc"
                    id="z-a-filter"
                    onClick={handleOrderAlphabet}
                  />
                  <label
                    htmlFor="z-a-filter"
                    class="pl-1 pt-sm-0 pt-1 filter-input-label"
                  >&nbsp;Z-A</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2 checkinput">
                  <input
                    type="radio"
                    name="type"
                    value="desc"
                    id="max-score-filter"
                    onClick={handleOrderScore}
                  />
                  <label
                    htmlFor="max-score-filter"
                    class="pl-1 pt-sm-0 pt-1 filter-input-label"
                  >&nbsp;maximum score</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2 checkinput">
                  <input
                    type="radio"
                    name="type"
                    value="asc"
                    id="lower-price-filter"
                    onClick={handleOrderPrice}
                  />
                  <label
                    htmlFor="lower-price-filter"
                    class="pl-1 pt-sm-0 pt-1 filter-input-label"
                  >&nbsp;lower price</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2 checkinput">
                  <input
                    type="radio"
                    name="type"
                    value="desc"
                    id="higher-price-filter"
                    onClick={handleOrderPrice}
                  />
                  <label
                    htmlFor="higher-price-filter"
                    class="pl-1 pt-sm-0 pt-1 filter-input-label"
                  >&nbsp;higher price</label>
                </div>
              </div>
              {filters.categories ? (
                <button class="btn btn-primary btn-sm mb-2" type="submit">
                  Reset Filters
                </button>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div class="mt-5">
        <div class="alert alert-warning" role="alert">
          <i
            class="bi bi-exclamation-triangle-fill"
            style={{ fontSize: "30px" }}
          />
          " {categories}"
        </div>
      </div>
    </>
  );
};

export default Filters;
