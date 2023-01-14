import { IBooking } from "./bookings";
import { IVehicleParts } from "./vehicleParts";


export interface Invoice{
    id?: number,
    booking?: IBooking,
    totalAmount?: number,
    paidAmount? : number,
    vehiclePart?: IVehicleParts
}