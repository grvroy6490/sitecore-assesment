import { readFileSync } from "node:fs";
import path from "node:path";

import { buildSchema, graphql } from "graphql";

interface DoctorRow {
  id: string;
  name: string;
  specialty?: string;
  photo?: { src: string; alt: string };
  bio?: string;
}

const rows: DoctorRow[] = [
  { id: "1", name: "Dr. Rao", specialty: "Cardiology", photo: { src: "/media/rao.jpg", alt: "Dr. Rao" }, bio: "<p>Interventional cardiologist.</p>" },
  { id: "2", name: "Dr. Mehta", specialty: "Cardiology" },
  { id: "3", name: "Dr. Shah", specialty: "Neurology", photo: { src: "/media/shah.jpg", alt: "" } },
  { id: "4", name: "Dr. Iyer", specialty: "Cardiology", photo: { src: "/media/iyer.jpg", alt: "Dr. Iyer" } },
  { id: "5", name: "Dr. Khan", specialty: "Cardiology", photo: { src: "/media/khan.jpg", alt: "Dr. Khan" } },
  { id: "6", name: "Dr. Nair", specialty: "Cardiology" },
  { id: "7", name: "Dr. Bose", specialty: "Cardiology", photo: { src: "/media/bose.jpg", alt: "Dr. Bose" } },
  { id: "8", name: "Dr. Das", specialty: "Orthopedics" }
];

const toDoctor = (r: DoctorRow) => ({
  id: r.id,
  name: { value: r.name },
  specialty: r.specialty ? { value: r.specialty } : null,
  photo: r.photo ?? null,
  bio: r.bio ? { value: r.bio } : null
});

const encode = (offset: number) => Buffer.from(String(offset)).toString("base64");
const decode = (cursor?: string | null) => (cursor ? Number(Buffer.from(cursor, "base64").toString()) : 0);

const root = {
  doctor: ({ id }: { id: string }) => {
    const row = rows.find((r) => r.id === id);
    return row ? toDoctor(row) : null;
  },
  doctors: ({ specialty, first, after }: { specialty?: string; first: number; after?: string }) => {
    const filtered = specialty ? rows.filter((r) => r.specialty === specialty) : rows;
    const start = decode(after);
    const page = filtered.slice(start, start + first);
    const next = start + page.length;
    return {
      total: filtered.length,
      pageInfo: { endCursor: page.length ? encode(next) : null, hasNext: next < filtered.length },
      results: page.map(toDoctor)
    };
  }
};

const schema = buildSchema(readFileSync(path.join(process.cwd(), "src/data/schema.graphql"), "utf8"));

export function runQuery(source: string, variableValues?: Record<string, unknown>) {
  return graphql({ schema, source, rootValue: root, variableValues });
}
