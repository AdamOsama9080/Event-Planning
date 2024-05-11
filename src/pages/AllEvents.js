import React from "react";
import colors from "../colors";
import ColledgeEventsCont from "../components/ColledgeEventsCont/ColledgeEventsCont";
import DropdownList from "../components/dropdown/Dropdown";
import PaginationComp from "../components/pagination/Pagination";

const AllEvents = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-6 col-sm-6">
          <p>Thriving Above Event Expectations.</p>
          <h1 style={{ fontSize: "48px" }}>
            Event<span style={{ color: colors.primaryColor }}>Hive</span>-ing{" "}
            <br></br> the Best.Day. Ever.
          </h1>

          <div className="my-4">
            <button
              className="btn py-4 mx-2"
              style={{
                backgroundColor: colors.primaryColor,
                color: colors.whiteColor,
              }}
            >
              <span className="h2">2k+</span>
              <br></br>
              Total Events Hosted
            </button>
            <button
              className="btn py-4"
              style={{
                backgroundColor: colors.primaryColor,
                color: colors.whiteColor,
              }}
            >
              <span className="h2">100+</span>
              <br></br>
              Total Events Hosted
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 text-center">
          <img
            className="w-100 rounded"
            src="images/35c0264ea7058c7f239524b63c3ee934.jpeg"
          ></img>
        </div>
      </div>
      <div className="my-4 d-lg-flex  justify-content-lg-between">
        <h2>
          <span style={{ color: colors.primaryColor }}>Events</span> around you
        </h2>
        <div className="d-lg-flex gap-2">
          <DropdownList></DropdownList>
          <DropdownList></DropdownList>
          <DropdownList></DropdownList>
        </div>
      </div>
      <ColledgeEventsCont></ColledgeEventsCont>
      <div className="d-flex justify-content-center">
        <PaginationComp></PaginationComp>
      </div>
    </div>
  );
};

export default AllEvents;
