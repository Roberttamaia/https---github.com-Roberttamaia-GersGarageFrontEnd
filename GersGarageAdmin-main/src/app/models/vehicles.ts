import { IUser } from "./user";
import { IVehicleType } from "./vehicleTypes";

export interface IVehicle {
    id?: number,
    engine?: string,
    lisence?: string,
    model?: string,
    user? : IUser,
    vehicleType? : IVehicleType
}