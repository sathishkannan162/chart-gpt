import "dotenv/config";

import * as schema from "../db/schema";

import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const client = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(client, { schema });
