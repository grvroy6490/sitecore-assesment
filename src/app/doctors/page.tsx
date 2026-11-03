import DoctorList from "@/components/DoctorList";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <main>
      <h1>Doctors</h1>
      <DoctorList doctors={doctors} />
    </main>
  );
}
