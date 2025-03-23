import data from './tableConvert.com_n36znn.json'

export const extraLocation = data.map(item=>(
    {
        city:item.city, location:item.country
    }
));

console.log(extraLocation)