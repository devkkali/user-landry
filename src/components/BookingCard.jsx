import React from "react";

// type: "ready" | "cancelled" | "rejected" | "completed";
function BookingCard({ title, type }) {
  return (
    <div className="rounded-xl bg-white p-1 shadow-sm shadow-gray-200">
      <div
        className={`rounded-t-lg p-3 text-center font-semibold ${
          type === "ready"
            ? "bg-yellow-100 text-yellow-500"
            : type === "cancelled"
            ? "bg-orange-100 text-orange-500"
            : type === "rejected"
            ? "bg-red-100 text-red-500"
            : "bg-green-100 text-green-500"
        }`}>
        {title}
      </div>
      <div className="space-y-4 p-4">
        <div className="">
          <p className="font-semibold">Booking ID</p>
          <p className="text-sm text-gray-600">128937861238798</p>
        </div>
        <div className="">
          <p className="font-semibold">Pickup Time Slot</p>
          <p className="text-sm text-gray-600">2023/12/28 (9pm - 10pm)</p>
        </div>
        <div className="">
          <p className="font-semibold">Delivery Time Slot</p>
          <p className="text-sm text-gray-600">2023/12/28 (9pm - 10pm)</p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
