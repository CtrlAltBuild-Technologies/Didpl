import { ProjectPlots, Plot } from "@/types/plot";

// Helper to generate some mock plots
const generatePlots = (count: number, start: number, baseRate: number): Plot[] => {
    const plots: Plot[] = [];
    for (let i = 0; i < count; i++) {
        const area = 150 + Math.floor(Math.random() * 200); // Random area between 150 and 350
        const rate = baseRate + (Math.random() > 0.8 ? 500 : 0); // Slight variation in rate
        const statusVal = Math.random();
        let status: "Available" | "Booked" | "Hold" = "Available";
        if (statusVal > 0.7) status = "Booked";
        else if (statusVal > 0.6) status = "Hold";

        const basicValue = area * rate;
        const govtCharges = Math.round(basicValue * 0.06); // Approx 6% for stamp duty/reg
        const agreementAmount = basicValue; // Simplified for mock
        const totalInvestment = agreementAmount + govtCharges;

        plots.push({
            plot_no: `${start + i}`,
            area_sq_yard: area,
            rate_per_sq_yard: rate,
            basic_value: basicValue,
            status: status,
            agreement_amount: agreementAmount,
            govt_charges: govtCharges,
            total_investment: totalInvestment,
            dimensions: `North: Plot ${start + i + 1}, South: Road, East: Park, West: Plot ${start + i - 1}`,
        });
    }
    return plots;
};

export const MOCK_PLOT_DATA: ProjectPlots = {
    "aero-town": {
        name: "AERO Town Residency",
        layoutImage: "/projects/aero-town-layout.jpg", // Placeholder
        plots: generatePlots(20, 101, 8500),
    },
    "dholera-homes-3": {
        name: "Dholera Homes 3",
        layoutImage: "/projects/dholera-homes-3-layout.jpg", // Placeholder
        plots: generatePlots(25, 1, 9500),
    },
};
