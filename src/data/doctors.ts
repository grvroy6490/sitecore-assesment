export interface Doctor {
  id: number;
  name: string;
  specialty?: string;
  photo?: string;
}

export const doctors: Doctor[] = [
  { id: 1, name: "Dr. Rao", specialty: "Cardiology", photo: "/rao.jpg" },
  { id: 2, name: "Dr. Mehta" },
  { id: 3, name: "Dr. Shah", specialty: "Neurology" },
  { id: 4, name: "Dr. Iyer", specialty: "Cardiology" }
];
