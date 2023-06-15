import errors from "@/errors/errors";
import { CreateLog, Jobs } from "@/protocols/CreateLogType";
import activitiesRepository from "@/repositories/activities-repository";
import constructionDiaryRepository from "@/repositories/construction-diary-repository";
import employeesRepository from "@/repositories/emplyees-repository";

async function getConstructionDiaryById(construction_id: number) {
  const constructionDiary =
    await constructionDiaryRepository.getConstructionDiaryById(construction_id);
  console.log(constructionDiary);
  // if(!constructionDiary) throw errors.notFoundError()
  return constructionDiary;
}

async function createDiaryLog(data: CreateLog, diaryId: number) {
  registerActivities(data.dayActivities, diaryId);
  registerEmployees(data.jobsObjt, diaryId);

  const constructionLog = await constructionDiaryRepository.createDiaryLog();
  return constructionLog;
}

async function registerActivities(dayActivities: string[], diaryId: number) {
  console.log(dayActivities);
  for (let i = 0; i < dayActivities.length; i++) {
    await activitiesRepository.logActivities(dayActivities[i], diaryId);
  }
}

async function registerEmployees(jobs: Jobs[], diaryId: number) {
  for (let i = 0; i < jobs.length; i++) {
    console.log(jobs[i]);
    await employeesRepository.registerEmployees(jobs[i], diaryId);
  }
}

async function createDiary(constructionId: number, date: string) {
  const isoDate = new Date(date);

  const diary = await constructionDiaryRepository.createDiary(
    constructionId,
    isoDate
  );
  console.log(diary);
  return diary;
}

async function getDiaryLog(diary_id: number) {
  const diaryLog = await constructionDiaryRepository.getDiaryLog(diary_id);
  console.log('oi', diaryLog)
  if (!diaryLog) throw errors.notFoundError();
  return diaryLog;
}

const constructionDiaryService = {
  getConstructionDiaryById,
  createDiaryLog,
  createDiary,
  getDiaryLog,
};

export default constructionDiaryService;
