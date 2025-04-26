import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: "Buy groceries",
    completed: false,
  },
  {
    title: "Buy groceries",
    completed: false,
  },
];

async function main() {
  console.log("Start seeding...");
  for (const todo of todoData) {
    await prisma.todo.create({ data: todo });
  }
  console.log("Seeding finished.");
}

main();
