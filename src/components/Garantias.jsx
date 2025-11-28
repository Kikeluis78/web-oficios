import React from "react";
import { CheckCircle2 } from "lucide-react";

const Garantias = () => {
  const garantias = [
    "Trabajo Garantizado",
    "Presupuesto sin costo",
    "Años de Experiencia",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {garantias.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-orange-600" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Garantias;
