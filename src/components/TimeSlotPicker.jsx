import React from "react";

function TimeSlotPicker({ title = "Choose Time Slot" }) {
  return (
    <div className="p-4 md:p-8">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-dark/80">
          When would you like your Item to be picked up?
        </p>
      </div>
      <div className="mt-4 flex gap-4 overflow-auto py-3">
        {[1, 2, 3, 4, 5, 6, 7].map((day, index) => (
          <div
            key={"date" + day}
            className={`flex h-24 w-24 shrink-0 cursor-pointer flex-col rounded-xl border-2 py-2 px-3 text-sm font-medium ${
              index === 0 ? "border-primary/80 bg-primary/5 text-primary" : ""
            }`}>
            <div>Oct</div>
            <div className="my-auto text-center text-3xl font-semibold">
              {day}
            </div>
            <div className="text-center">Sunday</div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="text-sm text-dark/80">
          At what time should the rider arrive?
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div
            className={`cursor-pointer rounded-lg border-2 p-2 text-center font-medium ${"border-primary/80 bg-primary/5 text-primary"}`}>
            09 AM - 11 AM
          </div>
          <div className="cursor-pointer rounded-lg border-2 p-2 text-center font-medium">
            09 AM - 11 AM
          </div>
          <div className="cursor-pointer rounded-lg border-2 p-2 text-center font-medium">
            09 AM - 11 AM
          </div>
          <div className="cursor-pointer rounded-lg border-2 p-2 text-center font-medium">
            09 AM - 11 AM
          </div>
          <div className="cursor-pointer rounded-lg border-2 p-2 text-center font-medium">
            09 AM - 11 AM
          </div>
          <div className="cursor-pointer rounded-lg border-2 p-2 text-center font-medium">
            09 AM - 11 AM
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-gray-100 p-5">
        <div className="text-sm font-medium text-dark/90">You have chosen</div>
        <div className="mt-1 flex flex-wrap gap-1 text-lg font-semibold">
          <span>18-09-2023</span>
          <span className="md:ml-10">09:00 AM - 11:00 AM</span>
        </div>
      </div>
      <div className="mt-10 gap-4 lg:flex">
        <button className="w-full rounded-lg bg-primary px-12 py-3 text-white outline-none md:w-max">
          Save
        </button>
        {/*<button className="mt-4 w-full rounded-lg bg-gray-200 px-12 py-3 text-gray-700 outline-none md:mt-0 md:w-max">*/}
        {/*  Cancel*/}
        {/*</button>*/}
      </div>
    </div>
  );
}

export default TimeSlotPicker;
