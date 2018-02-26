export class Filter {
  constructor(
    public name?: string,
    public stars?: number[]
  ) {
    this.name = name;
    this.stars = stars;
  }
}
