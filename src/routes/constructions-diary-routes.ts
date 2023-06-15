import constructionsDiaryControllers from "@/controllers/constructions-diary";
import { Router } from "express";

const constructionsDiaryRoutes = Router();

constructionsDiaryRoutes
  .get(
    "/:constructionId",
    constructionsDiaryControllers.getConstructionDiaryById
  )
  .post("/:id", constructionsDiaryControllers.createDiary)
  .post("/signup/:id", constructionsDiaryControllers.createDiaryLog)
  .get("/diary/:diaryId", constructionsDiaryControllers.getDiaryLog)

export default constructionsDiaryRoutes;
