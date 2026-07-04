"use client";

import Price from "@/components/shared/Price";
import Button from "@/components/shared/Button";

interface Departure {

  id:number;

  departure_date:string;

  return_date:string;

  remaining_capacity:number;

  base_price:number;

  child_price:number;

  infant_price:number;

  tax_amount:number;

  currency_code:string;

  status:string;

}

interface Props{

  departures:Departure[];

  selectedDepartureId:number;

  onChange:(id:number)=>void;

}

export default function DepartureSelector({

  departures,

  selectedDepartureId,

  onChange,

}:Props){

  const selected=

    departures.find(

      d=>d.id===selectedDepartureId

    );

  if(!selected){

    return null;

  }

  const departureDate=new Date(selected.departure_date);

  const returnDate=new Date(selected.return_date);

  const diffDays=Math.round(

    (returnDate.getTime()-departureDate.getTime())/

    (1000*60*60*24)

  );

  return(

    <div className="luxury-card p-8 sticky top-24">

      <Price

        price={Number(selected.base_price)}

      />

      <hr className="my-8"/>

      <h3 className="text-xl font-bold mb-5">

        تاریخ‌های حرکت

      </h3>

      <div className="space-y-3">

        {departures.map((departure)=>(

          <button

            key={departure.id}

            onClick={()=>onChange(departure.id)}

            className={`

            w-full

            rounded-xl

            border

            p-4

            transition

            text-right

            ${

              departure.id===selectedDepartureId

              ?

              "border-yellow-500 bg-yellow-50"

              :

              "border-gray-200 hover:border-yellow-400"

            }

            `}

          >

            <div className="flex justify-between">

              <span>

                {

                  new Date(

                    departure.departure_date

                  ).toLocaleDateString("fa-IR")

                }

              </span>

              <strong>

                {

                  Number(

                    departure.base_price

                  ).toLocaleString("fa-IR")

                }

              </strong>

            </div>

          </button>

        ))}

      </div>

      <hr className="my-8"/>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span>

            حرکت

          </span>

          <strong>

            {

              departureDate.toLocaleDateString("fa-IR")

            }

          </strong>

        </div>

        <div className="flex justify-between">

          <span>

            برگشت

          </span>

          <strong>

            {

              returnDate.toLocaleDateString("fa-IR")

            }

          </strong>

        </div>

        <div className="flex justify-between">

          <span>

            مدت تور

          </span>

          <strong>

            {diffDays}

            {" "}

            شب

          </strong>

        </div>

        <div className="flex justify-between">

          <span>

            ظرفیت

          </span>

          <strong>

            {

              selected.remaining_capacity

            }

            {" "}

            نفر

          </strong>

        </div>

      </div>

      <Button

        className="w-full mt-8"

      >

        رزرو

      </Button>

    </div>

  );

}