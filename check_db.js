const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDb() {
    try {
        console.log("Checking DB connection...");
        const res = await prisma.order.count();
        console.log("DB connected successfully. Total orders:", res);
    } catch (err) {
        console.error("DB connection error:", err.message);
    } finally {
        await prisma.$disconnect();
    }
}

checkDb();
