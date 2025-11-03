import React from 'react'
import offer_1 from '../assets/offer_1.jpg'
import offer_2 from '../assets/offer_2.jpg'
import offer_3 from '../assets/offer_3.jpg'

function Offers() {
    const offers = [
        {
            _id: 1,
            title: 'Sunny Escape Deal',
            description: 'Get a free night stay and morning meal included',
            priceOffer: 25,
            expiryDate: "Aug 31",
            image: offer_1
        },
        {
            id: 2,
            title: 'Couples Special',
            description: 'Relaxing package with spa services for two',
            priceOffer: 20,
            expiryDate: "Sep 20",
            image: offer_2
        },
        {
            id: 3,
            title: 'Advance Luxury  saver',
            description: 'Rwserve two months early and enjoy discounts at top-class hotels',
            priceOffer: 30,
            expiryDate: "Sep 25",
            image: offer_3
        },
    ]

    return (
        <section className='py-12 px-6'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold'>Special Offers</h2>
                <p className='text-gray-600 mt-2 text-sm max-w-xl mx-auto'>
                    Discover limited-time deals to save more on your next trip.
                </p>
            </div>

            <div className='gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {offers.map((offer, index) => (
                    <div key={index} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4'>
                        <img
                            className='h-70 w-full object-cover'
                            src={offer.image}

                        />

                        <div className='p-5'>
                            <h3 className='text-lg font text-[#e89755]'>{offer.title}</h3>
                            <p className='text-sm'>{offer.description}</p>
                        </div>
                        <p className='text-xl text-gray-500 mt-2'> Valid untill {offer.expiryDate}</p>
                        <div className='flex justify-between items-center pt-4 px-5 pb-5'>

                            <span className='font-bold'>{offer.priceOffer}% today</span>

                            <button>View offer</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offers
