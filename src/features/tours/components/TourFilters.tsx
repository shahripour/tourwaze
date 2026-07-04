"use client";

import { City } from "@/services/city.service";
import { TourCategory } from "@/services/category.service";

interface Props{

    cities:City[];

    categories:TourCategory[];

}

export default function TourFilters({

    cities,

    categories,

}:Props){

    return(

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">

            <div className="grid md:grid-cols-5 gap-4">

                <select className="border rounded-xl p-3">

                    <option value="">

                        مبدا

                    </option>

                    {cities.map(city=>(

                        <option

                            key={city.id}

                            value={city.id}

                        >

                            {city.name_fa}

                        </option>

                    ))}

                </select>

                <select className="border rounded-xl p-3">

                    <option value="">

                        مقصد

                    </option>

                    {cities.map(city=>(

                        <option

                            key={city.id}

                            value={city.id}

                        >

                            {city.name_fa}

                        </option>

                    ))}

                </select>

                <select className="border rounded-xl p-3">

                    <option>

                        دسته بندی

                    </option>

                    {categories.map(category=>(

                        <option

                            key={category.id}

                            value={category.id}

                        >

                            {category.title}

                        </option>

                    ))}

                </select>

                <input

                    type="date"

                    className="border rounded-xl p-3"

                />

                <button className="premium-btn">

                    جستجو

                </button>

            </div>

        </div>

    );

}