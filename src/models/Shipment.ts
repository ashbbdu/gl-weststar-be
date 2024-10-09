import mongoose, { Document, Schema } from 'mongoose';

// Enum for Transport Type
enum TransportType {
    Air = "Air",
    Sea = "Sea",
    Land = "Land",
}

// Enum for Shipment Status
enum ShipmentStatus {
    Pending = "Pending",
    InTransit = "In Transit",
    Delivered = "Delivered",
    Delayed = "Delayed",
}

// Interface for Shipment
interface IShipment extends Document {
    shipmentNumber: string;                
    transportType: TransportType;            
    portOfLoading: string;                   
    portOfDischarge: string;                
    estimatedTimeOfDeparture: Date;      
    actualTimeOfDeparture: Date;          
    estimatedTimeOfArrival: Date;           
    actualTimeOfArrival: Date;            
    status: ShipmentStatus;                   
}

// Schema for Shipment
const ShipmentSchema: Schema = new Schema({
    shipmentNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    transportType: {
        type: String,
        enum: Object.values(TransportType),
        required: true,
    },
    portOfLoading: {
        type: String,
        required: true,
        trim: true
    },
    portOfDischarge: {
        type: String,
        required: true,
        trim: true
    },
    estimatedTimeOfDeparture: {
        type: Date,
        required: true
    },
    actualTimeOfDeparture: {
        type: Date,
        required: true
    },
    estimatedTimeOfArrival: {
        type: Date,
        required: true
    },
    actualTimeOfArrival: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(ShipmentStatus),
        required: true,
    }
}, { timestamps: true });

// Export the Shipment model
const Shipment = mongoose.model<IShipment>('Shipment', ShipmentSchema);
export default Shipment;
