import React from "react";
import AutoCompleteAddress from "./AutoCompleteAddress";
import Cards from "./Cards";
import Cars from "./Cars";


function Booking() {
   
  return (
    <div className="p-5 ">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md h-screen">
        <AutoCompleteAddress />
        <Cars/>
        <Cards/>
      </div>
    </div>
  );
}

export default Booking;
