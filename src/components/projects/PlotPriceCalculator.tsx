"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, PAYMENT_TERMS, COMPANY_INFO, PlotOption } from "@/data/proposal-data";

interface PlotPriceCalculatorProps {
    /** The proposal-data project id, e.g. "aero-town" | "dholera-homes-3" */
    projectId: string;
}

export function PlotPriceCalculator({ projectId }: PlotPriceCalculatorProps) {
    const project = PROJECTS.find((p) => p.id === projectId) ?? null;
    const payment = PAYMENT_TERMS;
    const company = COMPANY_INFO;

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [selectedPlotNo, setSelectedPlotNo] = useState<string>("");
    const [selectedPlot, setSelectedPlot] = useState<PlotOption | null>(null);

    if (!project) return null;

    const handlePlotSelect = (plotNo: string) => {
        setSelectedPlotNo(plotNo);
        const plot = project.plots.find((p) => p.plot_no === plotNo) ?? null;
        setSelectedPlot(plot);
    };

    const totalPayment = selectedPlot
        ? selectedPlot.area_sq_yard * selectedPlot.rate_per_sq_yard
        : 0;

    const downPaymentAmount = totalPayment
        ? (totalPayment * payment.fullPayment.downPaymentPercent) / 100
        : 0;
    const restPaymentAmount = totalPayment
        ? (totalPayment * payment.fullPayment.restPaymentPercent) / 100
        : 0;

    const totalSqYard = project.plots.reduce((sum, p) => sum + p.area_sq_yard, 0);

    const handleSendEmail = () => {
        if (!email) {
            alert("Please enter an email address first.");
            return;
        }
        const subject = encodeURIComponent(`Plot Price - ${project.name}`);
        const body = encodeURIComponent(
            `Dear ${name || "Sir/Madam"},\n\nPlease find your Plot Price details below:\n\nProject: ${project.name}\nPlot No: ${selectedPlotNo || "N/A"}\nArea: ${selectedPlot?.area_sq_yard || "-"} Sq. Yard / ${selectedPlot?.area_sq_feet || "-"} Sq. Feet\nTotal Payment: ₹${totalPayment.toLocaleString("en-IN")}\n\nThank you,\n${company.name}`
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const handlePrint = () => window.print();

    const lbl = "bg-[#f0f0f0] border border-gray-300 px-3 py-2 font-medium text-gray-700 text-sm";
    const val = "border border-gray-300 px-3 py-2 text-sm";
    const inp = "w-full bg-white border-0 outline-none text-sm px-1 py-0.5";

    return (
        <section className="py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
            <div className="max-w-5xl mx-auto px-4">

                {/* ── Section Heading ── */}
                <div className="text-center mb-10">
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm">
                        Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a544e] mt-2">
                        Plot Price Calculator
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <div className="h-[1px] w-12 bg-[#D4AF37]" />
                        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
                        <div className="h-[1px] w-12 bg-[#D4AF37]" />
                    </div>
                    <p className="text-gray-500 mt-4 text-sm">
                        Browse all plots below, then select one in the form to calculate your price
                    </p>
                </div>

                <div className="flex flex-col gap-8">

                    {/* ══════════════════════════════════════════════
                        TOP — Full Plot List Table
                    ══════════════════════════════════════════════ */}
                    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#1a544e] to-[#225f56] text-white px-5 py-3">
                            <h3 className="font-bold text-base tracking-wide uppercase">
                                {project.name} — All Plots
                            </h3>
                            <p className="text-xs text-white/70 mt-0.5">
                                {project.plots.length} plots total
                            </p>
                        </div>

                        {/* Scrollable table */}
                        <div className="overflow-y-auto max-h-[520px]">
                            <table className="w-full border-collapse text-sm">
                                <thead className="sticky top-0 z-10">
                                    <tr className="bg-[#f0f0f0]">
                                        <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">
                                            Plot No.
                                        </th>
                                        <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-700">
                                            Sq. Yard
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {project.plots.map((plot, idx) => {
                                        const isSelected = plot.plot_no === selectedPlotNo;
                                        return (
                                            <tr
                                                key={plot.plot_no}
                                                onClick={() => plot.status === "Available" && handlePlotSelect(plot.plot_no)}
                                                className={`cursor-pointer transition-colors ${isSelected
                                                    ? "bg-[#e8f5f3] font-semibold"
                                                    : plot.status !== "Available"
                                                        ? "bg-red-50 opacity-60 cursor-not-allowed"
                                                        : idx % 2 === 0
                                                            ? "bg-white hover:bg-[#f0faf8]"
                                                            : "bg-gray-50 hover:bg-[#f0faf8]"
                                                    }`}
                                            >
                                                <td className={`border border-gray-200 px-3 py-1.5 text-center font-medium ${isSelected ? "text-[#1a544e]" : "text-gray-700"}`}>
                                                    {isSelected && (
                                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1a544e] mr-1 mb-0.5" />
                                                    )}
                                                    {plot.plot_no}
                                                </td>
                                                <td className="border border-gray-200 px-3 py-1.5 text-center text-gray-700">
                                                    {plot.area_sq_yard}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Totals footer */}
                        <div className="bg-[#1a544e] text-white text-xs px-4 py-2 font-semibold text-center">
                            Total Sq. Yard : {totalSqYard.toFixed(2)}
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════════
                        BOTTOM — Plot Price Calculation Form
                    ══════════════════════════════════════════════ */}
                    <div className="w-full">
                        <div
                            id={`proposal-printable-${projectId}`}
                            className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
                        >
                            {/* Header Banner */}
                            <div className="bg-[#6a0dad] text-white text-center py-3">
                                <h3 className="text-xl font-bold tracking-widest uppercase">
                                    Plot Price Calculation
                                </h3>
                            </div>

                            {/* Company + Project Header */}
                            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white">
                                {/* Company info */}
                                <div className="flex items-center gap-2">
                                    <div className="w-14 h-14 relative flex-shrink-0">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="text-[10px] text-gray-600 leading-relaxed">
                                        <p className="font-bold text-xs text-gray-800">{company.name}</p>
                                        <p>{company.address}</p>
                                        <p>📞 {company.phone}</p>
                                        <p>✉ {company.email}</p>
                                        <p>🌐 {company.website}</p>
                                    </div>
                                </div>

                                {/* Project branding */}
                                <div className="text-right min-w-[120px]">
                                    <div className="w-24 h-16 relative ml-auto mb-1">
                                        <Image
                                            src={project.logo}
                                            alt={project.name}
                                            fill
                                            className="object-contain rounded"
                                        />
                                    </div>
                                    <p className="font-black text-[#6a0dad] text-sm leading-tight">
                                        {project.name}
                                    </p>
                                    <p className="font-semibold text-[#c19b33] text-xs leading-tight">
                                        {project.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Offer Letter Title */}
                            <div className="text-center bg-gray-50 py-2.5 border-b border-gray-200">
                                <p className="text-sm font-semibold text-gray-700 tracking-wide">
                                    {project.name} — Offer Letter
                                </p>
                            </div>

                            {/* Form */}
                            <div className="px-4 py-4">

                                {/* Customer Details */}
                                <table className="w-full border-collapse mb-3">
                                    <tbody>
                                        <tr>
                                            <td className={`${lbl} w-32`}>Name</td>
                                            <td className={val}>
                                                <input
                                                    id={`${projectId}-name`}
                                                    type="text"
                                                    placeholder="Enter full name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className={inp}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={lbl}>Contact No.</td>
                                            <td className={val}>
                                                <input
                                                    id={`${projectId}-contact`}
                                                    type="tel"
                                                    placeholder="Enter contact number"
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}
                                                    className={inp}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={lbl}>Email Id</td>
                                            <td className={val}>
                                                <input
                                                    id={`${projectId}-email`}
                                                    type="email"
                                                    placeholder="Enter email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className={inp}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Plot Selector row */}
                                <table className="w-full border-collapse mb-3">
                                    <tbody>
                                        <tr>
                                            <td className={`${lbl} w-32`}>Select Plot No.</td>
                                            <td className={val}>
                                                <select
                                                    id={`${projectId}-plot-select`}
                                                    value={selectedPlotNo}
                                                    onChange={(e) => handlePlotSelect(e.target.value)}
                                                    className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 cursor-pointer outline-none focus:ring-1 focus:ring-[#1a544e]"
                                                >
                                                    <option value="">Please Select</option>
                                                    {project.plots.map((plot) => (
                                                        <option
                                                            key={plot.plot_no}
                                                            value={plot.plot_no}
                                                            disabled={plot.status !== "Available"}
                                                        >
                                                            Plot {plot.plot_no}
                                                            {plot.status !== "Available" ? ` (${plot.status})` : ""}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Plot Area */}
                                <table className="w-full border-collapse mb-3">
                                    <thead>
                                        <tr>
                                            <td className={`${lbl} w-32`} rowSpan={2}>Plot Area</td>
                                            <td className="border border-gray-300 px-3 py-1 text-center text-xs font-semibold text-gray-500 bg-gray-50 w-1/2">
                                                Sq. Yard
                                            </td>
                                            <td className="border border-gray-300 px-3 py-1 text-center text-xs font-semibold text-gray-500 bg-gray-50 w-1/2">
                                                Sq. Feet
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-1.5 text-center text-sm font-semibold text-gray-800">
                                                {selectedPlot ? selectedPlot.area_sq_yard : ""}
                                            </td>
                                            <td className="border border-gray-300 px-3 py-1.5 text-center text-sm font-semibold text-gray-800">
                                                {selectedPlot ? selectedPlot.area_sq_feet : ""}
                                            </td>
                                        </tr>
                                    </thead>
                                </table>

                                {/* Price per unit */}
                                <table className="w-full border-collapse mb-3">
                                    <thead>
                                        <tr>
                                            <td className={`${lbl} w-32`} rowSpan={2}>Price</td>
                                            <td className="border border-gray-300 px-3 py-1 text-center text-xs font-semibold text-gray-500 bg-gray-50 w-1/2">
                                                per sq. yard
                                            </td>
                                            <td className="border border-gray-300 px-3 py-1 text-center text-xs font-semibold text-gray-500 bg-gray-50 w-1/2">
                                                per sq. Feet
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-1.5 text-center text-sm font-bold text-[#1a544e]">
                                                {selectedPlot ? selectedPlot.rate_per_sq_yard.toLocaleString("en-IN") : ""}
                                            </td>
                                            <td className="border border-gray-300 px-3 py-1.5 text-center text-sm font-bold text-[#1a544e]">
                                                {selectedPlot ? selectedPlot.rate_per_sq_feet.toLocaleString("en-IN") : ""}
                                            </td>
                                        </tr>
                                    </thead>
                                </table>

                                {/* Total Payment */}
                                <table className="w-full border-collapse mb-4">
                                    <tbody>
                                        <tr>
                                            <td className={`${lbl} w-32`}>Total Payment</td>
                                            <td className="border border-gray-300 px-3 py-1.5 font-bold text-[#6a0dad] text-sm">
                                                {totalPayment > 0
                                                    ? `Rs. ${totalPayment.toLocaleString("en-IN")}`
                                                    : "Rs."}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Full Payment Option */}
                                <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
                                    <div className="bg-[#f5f0ff] border-b border-gray-300 text-center py-1.5">
                                        <span className="font-semibold text-[#6a0dad] text-xs tracking-wide uppercase">
                                            Full Payment Option
                                        </span>
                                    </div>
                                    <table className="w-full border-collapse">
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="border border-gray-300 px-2 py-1.5 font-semibold text-xs text-gray-700 bg-[#f9f9f9] w-20 text-center"
                                                    rowSpan={2}
                                                >
                                                    Option-1
                                                </td>
                                                <td className="border border-gray-300 px-2 py-1.5 text-xs text-gray-700">
                                                    Down Payment ({payment.fullPayment.downPaymentPercent}%)
                                                </td>
                                                <td className="border border-gray-300 px-2 py-1.5 text-xs font-semibold text-gray-800">
                                                    {downPaymentAmount > 0
                                                        ? `₹ ${downPaymentAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
                                                        : ""}
                                                </td>
                                                <td className="border border-gray-300 px-2 py-1.5 text-xs text-gray-600 italic">
                                                    {payment.fullPayment.downPaymentDeadline}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-2 py-1.5 text-xs text-gray-700">
                                                    Rest Payment ({payment.fullPayment.restPaymentPercent}%)
                                                </td>
                                                <td className="border border-gray-300 px-2 py-1.5 text-xs font-semibold text-gray-800">
                                                    {restPaymentAmount > 0
                                                        ? `₹ ${restPaymentAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
                                                        : ""}
                                                </td>
                                                <td className="border border-gray-300 px-2 py-1.5 text-xs text-gray-600 italic">
                                                    {payment.fullPayment.restPaymentDeadline}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-center gap-3 mb-5 no-print">
                                    <button
                                        id={`${projectId}-send-email-btn`}
                                        onClick={handleSendEmail}
                                        className="flex items-center gap-2 bg-[#1a544e] hover:bg-[#257a70] text-white font-semibold px-5 py-2 rounded-full text-xs transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        SEND EMAIL
                                    </button>
                                    <button
                                        id={`${projectId}-create-pdf-btn`}
                                        onClick={handlePrint}
                                        className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#e74c3c] text-white font-semibold px-5 py-2 rounded-full text-xs transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                        </svg>
                                        CREATE PDF
                                    </button>
                                </div>

                                {/* Signatory */}
                                <div className="border-t border-dashed border-gray-300 pt-4 pb-2 flex justify-between items-end">
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full border-4 border-[#6a0dad] flex items-center justify-center opacity-30">
                                            <span className="text-[7px] text-center text-[#6a0dad] font-bold">
                                                OFFICIAL<br />STAMP
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-semibold text-gray-700">Authorized Signatory,</p>
                                        <div className="mt-3 border-b border-gray-400 w-40 ml-auto" />
                                        <p className="text-[10px] text-gray-500 mt-1 italic">
                                            Signature ................................
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Banner */}
                                <div className="relative rounded-xl overflow-hidden h-16 mt-3">
                                    <Image
                                        src="/Dholera-Home-3.jpg"
                                        alt="Dholera Banner"
                                        fill
                                        className="object-cover object-center opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a544e]/70 to-[#6a0dad]/70 flex items-center justify-center">
                                        <p className="text-white font-bold tracking-widest text-sm drop-shadow">
                                            A New Gujarat Within Gujarat
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
