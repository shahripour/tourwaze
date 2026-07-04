"use client";

import { useMemo, useState } from "react";

import DepartureSelector from "./DepartureSelector";

import ServiceSelector from "./ServiceSelector";

import PriceSummary from "./PriceSummary";

interface Departure{

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

}

export default function TourBookingPanel({

  departures,

}:Props){

  const sorted=useMemo(()=>{

    return [...departures].sort(

      (a,b)=>

        new Date(a.departure_date).getTime()

        -

        new Date(b.departure_date).getTime()

    );

  },[departures]);

  const [

    selectedDepartureId,

    setSelectedDepartureId,

  ]=useState(

    sorted[0]?.id??0

  );

  const [

    servicePrice,

    setServicePrice,

  ]=useState(0);

  const selectedDeparture=

    sorted.find(

      x=>x.id===selectedDepartureId

    );

  if(!selectedDeparture){

    return null;

  }

  return(

    <div className="space-y-6">

      <DepartureSelector

        departures={sorted}

        selectedDepartureId={selectedDeparture.id}

        onChange={setSelectedDepartureId}

      />

      <ServiceSelector

        departureId={selectedDeparture.id}

        onTotalChange={setServicePrice}

      />

      <PriceSummary

        basePrice={

          Number(

            selectedDeparture.base_price

          )

        }

        servicePrice={servicePrice}

        tax={

          Number(

            selectedDeparture.tax_amount

          )

        }

        discount={0}

      />

    </div>

  );

}