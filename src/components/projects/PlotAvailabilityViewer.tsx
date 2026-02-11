"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Printer, FileDown, Map } from "lucide-react";
import { Plot } from "@/types/plot";
import { useReactToPrint } from "react-to-print";

interface PlotAvailabilityViewerProps {
    projectName: string;
    layoutImage?: string;
    plots: Plot[];
}

export function PlotAvailabilityViewer({ projectName, layoutImage, plots }: PlotAvailabilityViewerProps) {
    const componentRef = useRef<HTMLDivElement>(null);
    const costSheetRef = useRef<HTMLDivElement>(null);
    const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: `${projectName}-Plot-Availability`,
    });

    const handlePrintCostSheet = useReactToPrint({
        contentRef: costSheetRef,
        documentTitle: `${projectName}-Plot-${selectedPlot?.plot_no}-Cost-Sheet`,
    });

    // Calculate stats
    const totalPlots = plots.length;
    const availablePlots = plots.filter((p) => p.status === "Available").length;
    const bookedPlots = plots.filter((p) => p.status === "Booked").length;

    if (selectedPlot) {
        return (
            <div className="flex flex-col h-full bg-white text-gray-800 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex justify-between items-center bg-gray-50 border-b border-gray-100 p-4 sticky top-0 z-10">
                    <Button onClick={() => setSelectedPlot(null)} variant="ghost" className="text-gray-600">
                        ← Back to List
                    </Button>
                    <Button
                        onClick={() => handlePrintCostSheet && handlePrintCostSheet()}
                        className="flex items-center gap-2 bg-[#1a544e] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#D4AF37]"
                    >
                        <Printer size={16} /> Print Cost Sheet
                    </Button>
                </div>

                <div ref={costSheetRef} className="p-8 md:p-12 overflow-y-auto flex-1 bg-white print:p-0">
                    <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-8 shadow-sm print:shadow-none print:border-none">
                        <div className="text-center mb-10 border-b border-gray-100 pb-6">
                            <h1 className="text-3xl font-serif font-bold text-[#1a544e] mb-2">{projectName}</h1>
                            <h2 className="text-xl text-gray-600">Plot No: <span className="font-bold text-[#D4AF37] text-2xl">{selectedPlot.plot_no}</span></h2>
                            <span className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-semibold ${selectedPlot.status === "Available"
                                ? "bg-green-100 text-green-800"
                                : selectedPlot.status === "Booked"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}>
                                {selectedPlot.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-700 uppercase tracking-wider text-sm border-b pb-2">Plot Details</h3>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Area (Sq. Yard)</span>
                                    <span className="font-medium">{selectedPlot.area_sq_yard}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Rate / Sq. Yard</span>
                                    <span className="font-medium">₹{selectedPlot.rate_per_sq_yard.toLocaleString()}</span>
                                </div>
                                {selectedPlot.dimensions && (
                                    <div className="pt-2">
                                        <span className="text-gray-500 block mb-1">Dimensions</span>
                                        <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg leading-relaxed">{selectedPlot.dimensions}</p>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-700 uppercase tracking-wider text-sm border-b pb-2">Price Breakdown</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Agreement Amount</span>
                                    <span className="font-medium text-lg">₹{selectedPlot.agreement_amount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Govt. Charges (Approx)</span>
                                    <span className="font-medium text-lg">₹{selectedPlot.govt_charges.toLocaleString()}</span>
                                </div>
                                <div className="border-t pt-4 mt-2 flex justify-between items-center">
                                    <span className="font-bold text-[#1a544e]">Total Investment</span>
                                    <span className="font-bold text-2xl text-[#1a544e]">₹{selectedPlot.total_investment.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center text-xs text-gray-400 mt-12 pt-8 border-t">
                            <p>Generated by Dholera Industrial City Development Limited (DIDPL)</p>
                            <p>Prices and availability are subject to change. Valid for 7 days from generation.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full bg-white text-gray-800">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 border-b border-gray-100 p-4 sticky top-0 z-10 gap-4">
                <div>
                    <h2 className="text-xl font-bold font-serif text-[#1a544e]">{projectName}</h2>
                    <p className="text-sm text-gray-500">
                        Total: <span className="font-semibold">{totalPlots}</span> |
                        Available: <span className="font-semibold text-green-600">{availablePlots}</span> |
                        Booked: <span className="font-semibold text-red-500">{bookedPlots}</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    {/* Note: In a real app, generate PDF via a library like jspdf for better control,
                or use browser print as we do here which allows 'Save as PDF' */}
                    <Button
                        onClick={() => handlePrint && handlePrint()}
                        className="flex items-center gap-2 bg-[#1a544e] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#D4AF37]"
                    >
                        <Printer size={16} /> Print List
                    </Button>
                </div>
            </div>

            {/* Printable Content Area */}
            <div ref={componentRef} className="p-6 md:p-8 overflow-y-auto flex-1 bg-white print:p-0">
                {/* Printable Header - Visible only in Print */}
                <div className="hidden print:block mb-8 text-center border-b pb-4">
                    <h1 className="text-3xl font-bold text-[#1a544e] mb-2">{projectName}</h1>
                    <p className="text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
                </div>

                {/* Layout Section */}
                {layoutImage && (
                    <div className="mb-8 p-4 border rounded-xl bg-gray-50 print:break-inside-avoid">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <Map size={20} /> Project Layout
                        </h3>
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
                            {/*
                  Using standard img tag for print compatibility and simplicity in this example,
                  but Next.js Image is better for web.
                  We'll use Next.js Image with unoptimized for print checks.
                */}
                            <div className="flex items-center justify-center h-full text-gray-400">
                                {/* Placeholder for now if image is missing */}
                                <Image
                                    src={layoutImage}
                                    alt="Project Layout"
                                    fill
                                    className="object-contain"
                                    unoptimized // Helps with print sometimes
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('hidden');
                                    }}
                                />
                                <span className="absolute z-0">Layout Image Area</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-center italic">
                            *Layout is conceptual and subject to change.
                        </p>
                    </div>
                )}

                {/* Plots Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="px-4 py-3 min-w-[80px]">Plot No</th>
                                <th className="px-4 py-3 text-right">Area (Sq.Yd)</th>
                                <th className="px-4 py-3 text-right">Basic Value (₹)</th>
                                <th className="px-4 py-3 text-center">Status</th>
                                <th className="px-4 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {plots.map((plot) => (
                                <tr key={plot.plot_no} className="hover:bg-gray-50 print:break-inside-avoid">
                                    <td className="px-4 py-3 font-medium text-gray-900">{plot.plot_no}</td>
                                    <td className="px-4 py-3 text-right">{plot.area_sq_yard}</td>
                                    <td className="px-4 py-3 text-right font-semibold">₹{plot.basic_value.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${plot.status === "Available"
                                                ? "bg-green-100 text-green-800"
                                                : plot.status === "Booked"
                                                    ? "bg-red-100 text-red-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {plot.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Button
                                            onClick={() => setSelectedPlot(plot)}
                                            variant="outline"
                                            className="h-8 px-3 text-xs border-[#1a544e] text-[#1a544e] hover:bg-[#1a544e] hover:text-white"
                                        >
                                            View Cost Sheet
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer for print */}
                <div className="hidden print:block mt-8 pt-4 border-t text-center text-xs text-gray-400">
                    <p>Dholera Industrial City Development Limited (DIDPL) | www.didpl.com</p>
                </div>
            </div>
        </div>
    );
}
