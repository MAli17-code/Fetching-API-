"use client"
import React, { useEffect, useState } from 'react';
type Userprops =
    {
        id: number;
        quote: string;
        author: string;
    }

export default function Superheroes() {

    const [superHero, setsuperHero] = useState<Userprops[]>([])
    const [searchTerm, setSearchTerm] = useState('');

    async function superHeroApi() {
        try {
            const res = await fetch("https://dummyjson.com/quotes")
            if (!res.ok) {
                console.error("Failed to fetch data from the API");
                return;
            }
            const data = await res.json()
            setsuperHero(data.quotes)
        } catch (error) {
            console.error("An error occurred while fetching quotes:", error);
        }
    }

    useEffect(() => {
        superHeroApi()
    }, [])

    const filtersearch = superHero.filter((item) =>
        item.author.toLowerCase().startsWith(searchTerm) ||
        item.quote.toLowerCase().startsWith(searchTerm));

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search by author"
                    className="w-full max-w-md p-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                
            </div>

            {/* <div className="grid gap-4">
                {filtersearch.length ? (
                    filtersearch.map((q) => (
                        <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm hover:bg-gray-50">
                            <h3 className="text-xl font-semibold">{q.author}</h3>
                            <p className="text-gray-600">{q.quote}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No results found.</p>
                )}
            </div> */}

            <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filtersearch.length ? (
                        filtersearch.map((q) => (
                            <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm hover:bg-gray-50">
                                <h3 className="text-xl font-semibold">{q.author}</h3>
                                <p className="text-gray-600">{q.quote}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No results found.</p>
                    )}
                    {
                        superHero.map((item: Userprops) => {
                            return (
                                <div key={item.id} className="flex flex-col justify-between max-w-sm h-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                                    <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">"{item.quote}"</p>
                                    <h5 className="text-right text-lg font-bold tracking-tight text-gray-900 dark:text-white">- {item.author}</h5>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
