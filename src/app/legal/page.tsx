import { Container } from "@/components/ui/Container";
import { FileText, Download } from "lucide-react";

const documents = [
    { title: "Incorporation Certificate", date: "2012" },
    { title: "RERA Registration", date: "2023" },
    { title: "Dholera SIR Authority Letter", date: "2024" },
    { title: "Project Clearance Documents", date: "2024" },
];

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-[#FFF8E7]/30">
            <section className="py-20 md:py-32 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-[#1a544e] font-serif tracking-tight mb-8">
                            Legal & Compliance
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
                            "Transparency is the cornerstone of our detailed documentation."
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-xl border-t-4 border-[#D4AF37]">
                        <div className="space-y-6">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-6 border border-gray-100 hover:border-[#D4AF37]/50 hover:bg-[#FFF8E7]/20 transition-all duration-300 group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#1a544e]/5 flex items-center justify-center rounded-sm">
                                            <FileText className="text-[#1a544e] group-hover:text-[#D4AF37] transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif font-bold text-[#1a544e]">{doc.title}</h3>
                                            <p className="text-sm text-gray-500">Issued: {doc.date}</p>
                                        </div>
                                    </div>
                                    <button className="text-[#D4AF37] hover:text-[#1a544e] transition-colors">
                                        <Download size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
