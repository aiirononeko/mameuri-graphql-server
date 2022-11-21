import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allBusinessUsers = await prisma.businessUser.findMany()
  console.log(allBusinessUsers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
