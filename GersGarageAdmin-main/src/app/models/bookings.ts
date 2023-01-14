import { IService } from "./services";
import { IUser } from "./user";
import { IVehicle } from "./vehicles";

export interface IBooking {
    id?: number,
    firstName?: string,
    lastName?: string,
    contact?: string,
    vehicleType?: string,
    vehicleMake? : string,
    engine? : string,
    license?:string,
    Description?: string,
    date?: string
}