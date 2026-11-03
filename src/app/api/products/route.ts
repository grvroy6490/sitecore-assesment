import { NextResponse } from "next/server";

import { products } from "@/data/products";

// Mock API used by Task 2. Nothing to change here.
export function GET() {
  return NextResponse.json(products);
}
