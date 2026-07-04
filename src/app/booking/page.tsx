"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleBooking = async () => {
  console.log("شروع ثبت رزرو");

  const payload = {
    name,
    phone,
    destination,
    travel_date: travelDate,
    passengers,
  };

  console.log("PAYLOAD:", payload);

  const { data, error } = await supabase
    .from("bookings")
    .insert([payload])
    .select();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert("خطا در ثبت رزرو");
    return;
  }

  alert("رزرو با موفقیت ثبت شد");
};
  return (
    <main className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <h1 className="text-4xl font-bold text-yellow-700 mb-8">
        رزرو تور
      </h1>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="space-y-5">

          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="text"
            placeholder="شماره موبایل"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="text"
            placeholder="مقصد (مثلاً کیش)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="number"
            placeholder="تعداد مسافر"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <button
            onClick={handleBooking}
            className="w-full bg-black text-white py-4 rounded-xl premium-btn"
          >
            ثبت رزرو
          </button>

        </div>
      </div>
    </main>
  );
}