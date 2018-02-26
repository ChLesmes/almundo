import fs from 'fs';
const hotelsFile = './server/data/data.json';

const hotel =  {
  findAll: () => {
    let rawdata = fs.readFileSync(hotelsFile);
    return JSON.parse(rawdata);
  },
  findById: (idHotel) => hotel.findAll().find(({id}) => id == idHotel)
};
export default hotel;
