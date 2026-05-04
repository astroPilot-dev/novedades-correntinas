"use client";

export function DateComponent() {
  const Data = new Date();

  const formato: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const fecha = Data.toLocaleString("es-ES", formato);

  return <div className="text-sm text-primary opacity-60 mt-4 italic flex justify-center" title={fecha}>{fecha}</div>;
}

