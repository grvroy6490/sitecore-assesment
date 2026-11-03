import type { Doctor } from "@/data/doctors";

/**
 * TASK 1
 * Render the doctors: name and specialty.
 * See TASKS.md for the full requirements.
 */
export default function DoctorList({ doctors }: { doctors: Doctor[] }) {
  return (
    <div>
      {/* TODO */}
      <p>{doctors.length} doctors loaded. Render them here.</p>
    </div>
  );
}
