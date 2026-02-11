export type BookingStatus = "Available" | "Booked" | "Hold";

export interface Plot {
    plot_no: string;
    area_sq_yard: number;
    rate_per_sq_yard: number;
    basic_value: number; // calculated as area * rate
    status: BookingStatus;
    plc?: string; // Preferential Location Charges if any
    // Detailed Pricing
    agreement_amount: number;
    govt_charges: number;
    total_investment: number;
    dimensions?: string; // e.g. "North: Plot 12, South: Road..."
}

export interface ProjectPlots {
    [projectId: string]: {
        name: string;
        layoutImage: string; // path to layout image
        plots: Plot[];
    };
}
