"use client";

import { useState } from "react";
import Image from "next/image";
import {
    COMPANY_INFO,
    PAYMENT_TERMS,
    PROJECTS,
    ProjectProposal,
    PlotOption,
} from "@/data/proposal-data";
import { Phone, Mail, Globe } from "lucide-react";

export default function ProposalPage() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");

    const [selectedProject, setSelectedProject] = useState<ProjectProposal | null>(null);
    const [selectedPlotNo, setSelectedPlotNo] = useState<string>("");
    const [selectedPlot, setSelectedPlot] = useState<PlotOption | null>(null);

    const company = COMPANY_INFO;
    const payment = PAYMENT_TERMS;

    // When the project changes, reset the plot selection
    const handleProjectChange = (projectId: string) => {
        const proj = PROJECTS.find((p) => p.id === projectId) || null;
        setSelectedProject(proj);
        setSelectedPlotNo("");
        setSelectedPlot(null);
    };

    const handlePlotSelect = (plotNo: string) => {
        setSelectedPlotNo(plotNo);
        const plot = selectedProject?.plots.find((p) => p.plot_no === plotNo) || null;
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

    const handlePrint = () => window.print();

    const handleSendEmail = () => {
        if (!email) {
            alert("Please enter an email address first.");
            return;
        }
        const subject = encodeURIComponent(
            `Plot Price - ${selectedProject?.name ?? "Project"}`
        );
        const body = encodeURIComponent(
            `Dear ${name || "Sir/Madam"},\n\nPlease find your Plot Price details below:\n\nProject: ${selectedProject?.name ?? "-"}\nPlot No: ${selectedPlotNo || "N/A"}\nArea: ${selectedPlot?.area_sq_yard || "-"} Sq. Yard\nTotal Payment: ₹${totalPayment.toLocaleString("en-IN")}\n\nThank you,\n${company.name}`
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const labelCell =
        "bg-[#f0f0f0] border border-gray-300 px-3 py-2 font-medium text-gray-700 text-sm";
    const valueCell = "border border-gray-300 px-3 py-2 text-sm";
    const selectStyle =
        "w-full bg-white border-0 outline-none text-sm text-gray-700 py-0.5 cursor-pointer";
    const inputStyle = "w-full h-full bg-white border-0 outline-none text-sm px-1";

    return (
        <>
            {/* Print styles */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 10mm;
                    }
                    
                    /* Reset everything */
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        height: auto !important;
                        overflow: visible !important;
                    }

                    /* Hide basic containers that envelope everything */
                    header, footer, nav, .no-print, section:not(.printable-parent) {
                        display: none !important;
                    }

                    /* Ensure the main container is visible and takes up space */
                    #proposal-printable {
                        display: block !important;
                        visibility: visible !important;
                        position: relative !important;
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        background: white !important;
                        box-shadow: none !important;
                    }

                    /* Force all children to be visible */
                    #proposal-printable * {
                        visibility: visible !important;
                    }

                    /* Restore table layouts specifically */
                    #proposal-printable table { display: table !important; width: 100% !important; }
                    #proposal-printable tr { display: table-row !important; }
                    #proposal-printable td, #proposal-printable th { display: table-cell !important; }
                    
                    /* Hide inputs/selects borders */
                    #proposal-printable input, #proposal-printable select {
                        border: none !important;
                        background: transparent !important;
                        -webkit-appearance: none !important;
                    }

                    /* Prevent multi-page generation */
                    #proposal-printable {
                        page-break-after: avoid !important;
                    }
                }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 py-10 px-4">

                {/* Page heading */}
                <div className="no-print text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#1a544e] tracking-tight">
                        Plot Price Calculation
                    </h1>
                    <p className="text-gray-500 mt-1 text-sm">
                        Select a project and plot to generate the price sheet
                    </p>
                </div>

                {/* Printable card */}
                <div
                    id="proposal-printable"
                    className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
                >
                    {/* ─── Header Banner ─── */}
                    <div className="bg-[#6a0dad] text-white text-center py-3">
                        <h2 className="text-xl font-bold tracking-widest uppercase">
                            Plot Price
                        </h2>
                    </div>

                    {/* ─── Company + Project Header ─── */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                        {/* Company info */}
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 relative flex-shrink-0">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                                <p className="font-bold text-sm text-gray-800">{company.name}</p>
                                <p>{company.address}</p>
                                <p className="flex items-center gap-1"><Phone size={12} /> {company.phone}</p>
                                <p className="flex items-center gap-1"><Mail size={12} /> {company.email}</p>
                                <p className="flex items-center gap-1"><Globe size={12} /> {company.website}</p>
                            </div>
                        </div>

                        {/* Dynamic project branding */}
                        <div className="text-right min-w-[140px]">
                            {selectedProject ? (
                                <>
                                    <div className="w-28 h-20 relative ml-auto mb-1">
                                        <Image
                                            src={selectedProject.logo}
                                            alt={selectedProject.name}
                                            fill
                                            className="object-contain rounded"
                                        />
                                    </div>
                                    <p className="font-black text-[#6a0dad] text-base leading-tight">
                                        {selectedProject.name}
                                    </p>
                                    <p className="font-semibold text-[#c19b33] text-sm leading-tight">
                                        {selectedProject.subtitle}
                                    </p>
                                </>
                            ) : (
                                <div className="w-28 h-20 ml-auto flex items-center justify-center border-2 border-dashed border-gray-200 rounded text-gray-300 text-xs">
                                    Select project
                                </div>
                            )}
                            <p className="text-xs text-gray-500 mt-1 italic">{company.tagline}</p>
                        </div>
                    </div>

                    {/* ─── Offer Letter Title ─── */}
                    <div className="text-center bg-gray-50 py-3 border-b border-gray-200">
                        <h3 className="text-base font-semibold text-gray-700 tracking-wide">
                            {selectedProject
                                ? `${selectedProject.name} — Plot Price`
                                : "Select a Project to Begin"}
                        </h3>
                    </div>

                    {/* ─── Form Section ─── */}
                    <div className="px-6 py-5">

                        {/* Customer Details */}
                        <table className="w-full border-collapse mb-4">
                            <tbody>
                                <tr>
                                    <td className={`${labelCell} w-36`}>Name</td>
                                    <td className={valueCell}>
                                        <input
                                            id="proposal-name"
                                            type="text"
                                            placeholder="Enter full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={inputStyle}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={labelCell}>Contact No.</td>
                                    <td className={valueCell}>
                                        <input
                                            id="proposal-contact"
                                            type="tel"
                                            placeholder="Enter contact number"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            className={inputStyle}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={labelCell}>Email Id</td>
                                    <td className={valueCell}>
                                        <input
                                            id="proposal-email"
                                            type="email"
                                            placeholder="Enter email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={inputStyle}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* ─── Project + Plot Selection ─── */}
                        <table className="w-full border-collapse mb-4">
                            <tbody>
                                {/* Project selector */}
                                <tr>
                                    <td className={`${labelCell} w-36`}>Select Project</td>
                                    <td className={valueCell}>
                                        <select
                                            id="proposal-project-select"
                                            value={selectedProject?.id ?? ""}
                                            onChange={(e) => handleProjectChange(e.target.value)}
                                            className={selectStyle}
                                        >
                                            <option value="">— Please Select —</option>
                                            {PROJECTS.map((proj) => (
                                                <option key={proj.id} value={proj.id}>
                                                    {proj.name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>

                                {/* Plot selector — only active once a project is selected */}
                                <tr>
                                    <td className={`${labelCell} w-36`}>Select Plot No.</td>
                                    <td className={valueCell}>
                                        <select
                                            id="proposal-plot-select"
                                            value={selectedPlotNo}
                                            onChange={(e) => handlePlotSelect(e.target.value)}
                                            disabled={!selectedProject}
                                            className={`${selectStyle} disabled:opacity-40 disabled:cursor-not-allowed`}
                                        >
                                            <option value="">
                                                {selectedProject ? "— Please Select —" : "— Select a project first —"}
                                            </option>
                                            {selectedProject?.plots.map((plot) => (
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
                        <table className="w-full border-collapse mb-4">
                            <thead>
                                <tr>
                                    <td className={`${labelCell} w-36`} rowSpan={2}>Plot Area</td>
                                    <td className="border border-gray-300 px-3 py-1 text-center text-xs font-semibold text-gray-500 bg-gray-50">
                                        Sq. Yard
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-800">
                                        {selectedPlot ? selectedPlot.area_sq_yard : "—"}
                                    </td>
                                </tr>
                            </thead>
                        </table>

                        {/* Price per unit */}
                        <table className="w-full border-collapse mb-4">
                            <thead>
                                <tr>
                                    <td className={`${labelCell} w-36`} rowSpan={2}>Price</td>
                                    <td className="border border-gray-300 px-3 py-1 text-center text-xs font-semibold text-gray-500 bg-gray-50">
                                        per sq. yard
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-3 py-2 text-center text-sm font-bold text-[#1a544e]">
                                        {selectedPlot
                                            ? `₹ ${selectedPlot.rate_per_sq_yard.toLocaleString("en-IN")}`
                                            : "—"}
                                    </td>
                                </tr>
                            </thead>
                        </table>

                        {/* Total Payment */}
                        <table className="w-full border-collapse mb-6">
                            <tbody>
                                <tr>
                                    <td className={`${labelCell} w-36`}>Total Payment</td>
                                    <td className="border border-gray-300 px-3 py-2 font-bold text-[#6a0dad] text-base">
                                        {totalPayment > 0
                                            ? `Rs. ${totalPayment.toLocaleString("en-IN")}`
                                            : "Rs. —"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* ─── Full Payment Option ─── */}
                        <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                            <div className="bg-[#f5f0ff] border-b border-gray-300 text-center py-2">
                                <span className="font-semibold text-[#6a0dad] text-sm tracking-wide uppercase">
                                    Full Payment Option
                                </span>
                            </div>
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr>
                                        <td
                                            className="border border-gray-300 px-3 py-2 font-semibold text-sm text-gray-700 bg-[#f9f9f9] w-28 text-center"
                                            rowSpan={2}
                                        >
                                            Option 1
                                        </td>
                                        <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700 w-52">
                                            Down Payment ({payment.fullPayment.downPaymentPercent}%)
                                        </td>
                                        <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 w-52">
                                            {downPaymentAmount > 0
                                                ? `₹ ${downPaymentAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
                                                : "—"}
                                        </td>
                                        <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600 italic">
                                            {payment.fullPayment.downPaymentDeadline}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">
                                            Rest Payment ({payment.fullPayment.restPaymentPercent}%)
                                        </td>
                                        <td className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-800">
                                            {restPaymentAmount > 0
                                                ? `₹ ${restPaymentAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`
                                                : "—"}
                                        </td>
                                        <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600 italic">
                                            {payment.fullPayment.restPaymentDeadline}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ─── Action Buttons ─── */}
                        <div className="no-print flex items-center justify-center gap-4 mb-6">
                            <button
                                id="proposal-send-email-btn"
                                onClick={handleSendEmail}
                                className="flex items-center gap-2 bg-[#1a544e] hover:bg-[#257a70] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                SEND EMAIL
                            </button>

                            <button
                                id="proposal-create-pdf-btn"
                                onClick={handlePrint}
                                className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#e74c3c] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                CREATE PDF
                            </button>
                        </div>

                        {/* ─── Signatory Section ─── */}
                        <div className="border-t border-dashed border-gray-300 pt-6 pb-4 flex justify-between items-end">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-[#6a0dad] flex items-center justify-center opacity-30">
                                    <span className="text-[8px] text-center text-[#6a0dad] font-bold">
                                        OFFICIAL<br />STAMP
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-700">Authorized Signatory,</p>
                                <div className="mt-4 border-b border-gray-400 w-48 ml-auto" />
                                <p className="text-xs text-gray-500 mt-1 italic">
                                    Signature ................................
                                </p>
                            </div>
                        </div>

                        {/* ─── Footer Banner ─── */}
                        <div className="relative rounded-xl overflow-hidden h-20 mt-2">
                            <Image
                                src="/Dholera-Home-3.jpg"
                                alt="Dholera Banner"
                                fill
                                className="object-cover object-center opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a544e]/70 to-[#6a0dad]/70 flex items-center justify-center">
                                <p className="text-white font-bold tracking-widest text-lg drop-shadow">
                                    A New Gujarat Within Gujarat
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end form section */}
                </div>
                {/* end card */}
            </div>
        </>
    );
}
