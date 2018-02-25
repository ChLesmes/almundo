export class Hotel {
  constructor(
    public name: string,
    public stars: string,
    public price: string,
    public image: string,
    public amenities?: string[],
    public _id?: string
  ) {
    this._id = _id;
    this.name = name;
    this.stars = stars;
    this.price = price;
    this.image = image;
    this.amenities = amenities;
  }
}
