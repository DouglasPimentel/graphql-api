import { PrismaClient } from '@prisma/client';

async function startDatabase(): Promise<PrismaClient> {
  const database = new PrismaClient();

  await database.$connect();

  return database;
}

export default startDatabase;
