import { readFileSync } from "node:fs";
import path from "node:path";

import { runQuery } from "../src/data/graphqlData";

/**
 * Runs queries/doctors.graphql against the local mock schema and prints the result.
 *
 *   npm run gql
 *   npm run gql -- '{"specialty":"Cardiology","first":3}'     (pass variables as JSON)
 */
async function main() {
  const file = path.join(process.cwd(), "queries", "doctors.graphql");
  const source = readFileSync(file, "utf8");
  const variables = process.argv[2] ? JSON.parse(process.argv[2]) : undefined;

  const result = await runQuery(source, variables);
  console.log(JSON.stringify(result, null, 2));
}

main();
