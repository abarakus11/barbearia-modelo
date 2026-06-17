"use client";

import { FormEvent, useMemo, useState } from "react";
import { services, staff, whatsappLink } from "@/data/site";

export function BookingForm() {
  const [staffId, setStaffId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [time, setTime] = useState("");

  const selectedStaff = useMemo(
    () => staff.find((item) => String(item.id) === staffId),
    [staffId],
  );

  const selectedService = useMemo(
    () => services.find((item) => String(item.id) === serviceId),
    [serviceId],
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "");
    const telefone = String(data.get("telefone") || "");
    const dataAgenda = String(data.get("data") || "");
    const obs = String(data.get("obs") || "");

    const text = [
      "Olá! Gostaria de confirmar um agendamento:",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Data: ${dataAgenda}`,
      `Profissional: ${selectedStaff?.name || "-"}`,
      `Horário: ${time}`,
      `Serviço: ${selectedService?.name || "-"}`,
      obs ? `Observações: ${obs}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <input name="telefone" required placeholder="Seu Telefone DDD + número" className="w-full rounded-lg border px-4 py-3" />
      <input name="nome" required placeholder="Seu Nome" className="w-full rounded-lg border px-4 py-3" />
      <input name="data" type="date" required defaultValue={today} min={today} className="w-full rounded-lg border px-4 py-3" />

      <select
        value={staffId}
        onChange={(e) => {
          setStaffId(e.target.value);
          setTime("");
        }}
        required
        className="w-full rounded-lg border px-4 py-3"
      >
        <option value="">Selecionar Barbeiro</option>
        {staff.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>

      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        disabled={!selectedStaff}
        className="w-full rounded-lg border px-4 py-3 disabled:bg-neutral-100"
      >
        <option value="">Selecione um horário</option>
        {selectedStaff?.slots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>

      <select
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        required
        className="w-full rounded-lg border px-4 py-3"
      >
        <option value="">Selecione um Serviço</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name} - R$ {service.price.toFixed(2).replace(".", ",")}
          </option>
        ))}
      </select>

      <input name="obs" maxLength={100} placeholder="Observações caso exista alguma." className="w-full rounded-lg border px-4 py-3" />

      <button type="submit" className="btn-primary w-full">
        Confirmar Agendamento
      </button>
    </form>
  );
}
