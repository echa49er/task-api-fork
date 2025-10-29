import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTaskById(id) {
  try {
    return await taskRepository.findById(id);
  } catch (error) {
    throw error;
  }
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
