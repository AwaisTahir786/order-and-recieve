export interface SimplifiedProduct{
    _id:string;
    name:string;
    price:number;
    slug:string;
    categoryName:string;
    imageUrl:string
}

export interface FullProduct{
    _id:string;
    name:string;
    price:number;
    slug:string;
    categoryName:string;
    images:string;
    description:string
}