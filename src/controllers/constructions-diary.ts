import { CreateDiary } from "@/protocols/CreateDiaryType"
import { CreateLog } from "@/protocols/CreateLogType"
import constructionDiaryService from "@/services/construction-diary-service"
import { NextFunction, Request, Response } from "express"


async function getConstructionDiaryById(req:Request, res:Response, next: NextFunction) {
    const {constructionId} = req.params

    try {
        const constructionDiary = await constructionDiaryService.getConstructionDiaryById(Number(constructionId))
        return res.send(constructionDiary)
    } catch (error) {
        next(error)
    }

}

async function createDiary(req:Request, res:Response, next: NextFunction) {
    const {date} = req.body as CreateDiary
    console.log(date)
    const {id: constructionId} = req.params 
    try {
        const diary = await constructionDiaryService.createDiary(Number(constructionId), date)
        return res.status(201).send(diary)
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function createDiaryLog(req:Request, res:Response, next: NextFunction) { 
    const {id: diaryId} = req.params
    const {data} = req.body

    try {
        const constructionLog = await constructionDiaryService.createDiaryLog(data, Number(diaryId))
        return res.send(constructionLog)
    } catch (error) {
        next(error)
    }
   

}

async function getDiaryLog(req:Request, res:Response, next: NextFunction) {
    const {diaryId} = req.params
    console.log(diaryId)
    try {
        const diaryLog = await constructionDiaryService.getDiaryLog(Number(diaryId))
        return res.send(diaryLog)
    } catch (error) {
        next(error)
    }
}



const constructionsDiaryControllers = {
    getConstructionDiaryById,
    createDiaryLog,
    createDiary,
    getDiaryLog
}

export default constructionsDiaryControllers