import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const businessUser1 = await prisma.businessUser.upsert({
    where: { email: 'businessUser1@example.com' },
    update: {},
    create: {
      email: 'businessUser1@example.com',
      name: 'businessUser1'
    }
  })

  const businessUser2 = await prisma.businessUser.upsert({
    where: { email: 'businessUser2@example.com' },
    update: {},
    create: {
      email: 'businessUser2@example.com',
      name: 'businessUser2'
    }
  })

  const businessUser3 = await prisma.businessUser.upsert({
    where: { email: 'businessUser3@example.com' },
    update: {},
    create: {
      email: 'businessUser3@example.com',
      name: 'businessUser3'
    }
  })

  console.log({ businessUser1, businessUser2, businessUser3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect
  })
