"use client";

import { useEffect, useMemo, useState } from "react";

import { getDepartureServices } from "@/services/service.service";

interface ServiceItem {

  id:number;

  sell_price:number;

  services:{

    id:number;

    name:string;

    description:string;

  };

}

interface Props{

  departureId:number;

  onTotalChange:(price:number)=>void;

}

export default function ServiceSelector({

  departureId,

  onTotalChange,

}:Props){

  const [services,setServices]=useState<ServiceItem[]>([]);

  const [selected,setSelected]=useState<number[]>([]);

  useEffect(()=>{

    async function load(){

      const result=

        await getDepartureServices(

          departureId

        );

      setServices(result);

      setSelected([]);

    }

    load();

  },[departureId]);

  const servicePrice=useMemo(()=>{

    let total=0;

    services.forEach(service=>{

      if(selected.includes(service.id)){

        total+=Number(service.sell_price);

      }

    });

    return total;

  },[selected,services]);

  useEffect(()=>{

    onTotalChange(servicePrice);

  },[servicePrice,onTotalChange]);

  return(

    <div className="luxury-card p-8">

      <h3 className="text-xl font-bold mb-6">

        خدمات اختیاری

      </h3>

      <div className="space-y-4">

        {services.map(service=>(

          <label

            key={service.id}

            className="flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-yellow-500"

          >

            <div>

              <div className="font-semibold">

                {service.services.name}

              </div>

              <div className="text-sm text-gray-500">

                {service.services.description}

              </div>

            </div>

            <div className="flex gap-4 items-center">

              <span>

                {Number(service.sell_price).toLocaleString("fa-IR")}

              </span>

              <input

                type="checkbox"

                checked={selected.includes(service.id)}

                onChange={()=>{

                  if(selected.includes(service.id)){

                    setSelected(

                      selected.filter(

                        x=>x!==service.id

                      )

                    );

                  }else{

                    setSelected([

                      ...selected,

                      service.id,

                    ]);

                  }

                }}

              />

            </div>

          </label>

        ))}

      </div>

    </div>

  );

}