import prisma from "@/config/database";
import { Jobs } from "@/protocols/CreateLogType";

async function registerEmployees(job: Jobs, diaryId: number) {
  return prisma.employees_diary.create({
    data: {
      quantity: Number(job.quantity),
      job: job.job,
      construction_diary_id: diaryId,
    },
  });
}

const employeesRepository = {
  registerEmployees,
};

export default employeesRepository;
