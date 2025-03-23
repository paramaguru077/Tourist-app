export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]


export const AI_PROMPT = `generate travel plan for location: {location}, for {totalDays} days for {traveler} with a {budget} budget.  
give me:  
1. hotels options list with:  
   - hotel name, hotel address, price in rupees, hotel image url, geo coordinates, rating, description.  
2. restaurants options list with:  
   - restaurant name, address, cuisine type, price range in rupees, rating, image url, geo coordinates, description.  
3. suggested itinerary with:  
   - place name, place details, place image url, geo coordinates, place address, ticket pricing in rupees, travel time between locations for {totalDays} days, with each day's plan including the best time to visit.  

return the response in json format.`;  

