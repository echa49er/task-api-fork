import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function findById(id) {
  const taskId = parseInt(id);
  if (isNaN(taskId)) {
    throw new Error('ID must be a number');
  }
  
  return prisma.task.findUnique({
    where: { id: taskId }
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
