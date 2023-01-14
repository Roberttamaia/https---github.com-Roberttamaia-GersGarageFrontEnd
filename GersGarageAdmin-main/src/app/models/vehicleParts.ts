import { IVehicleType } from "./vehicleTypes";


export interface IVehicleParts{
    id?: number,
    name?: string,
    pricing?: number,
    vehicleType?: IVehicleType
}