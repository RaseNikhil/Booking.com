export interface SignUp{
  name:string,
  email:string,
  password:string
}

export interface LogIn{
  email:string,
  password:string
}

export interface productDetails
{
  hotelName:String,
  hotelAddress:String,
  rooms:number,
  roomPrices:number,
  description:String,
  hotelImage:String,
  id:number
}
