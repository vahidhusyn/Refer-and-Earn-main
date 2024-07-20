import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function PrismaHandler() {
  // ... you will write your Prisma Client queries here
}

PrismaHandler()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export default PrismaHandler