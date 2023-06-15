import prisma from "@/config/database"
async function getConstructionDiaryById(construction_id: number) {

    return prisma.construction_diary.findMany({
     where: {
        construction_id
     },
     include: {
        activities: true
     }
    })

    
    // const result = await prisma.construction_diary.findFirst({
    //     where: {
    //         construction_id
    //     },
    //     include: {
    //         construction_activity: true,
    //         employees_diary: {
    //             select: {
    //                 employees: {
    //                     select: {
    //                         name: true,
    //                         function: true
    //                     }
    //                 }
    //             } 
    //         }
    //     }
    // });
    // if(!result) return result
    // const constructionDiary = {
    //     id: result.id,
    //     date: result.date,
    //     construction_id: result.construction_id,
    //     construction_activity: result.construction_activity.map(activity => activity.activity),
    //     employees: result.employees_diary.map(employee => ({
    //         name: employee.employees.name,
    //         function: employee.employees.function
    //     }))
    // };
   
    // return constructionDiary;
}

async function createDiaryLog() {

}

async function createDiary(constructionId: number, date: Date ) {
    return prisma.construction_diary.create({data: {construction_id: constructionId, date}})
}

async function getDiaryLog(id: number) {
    console.log('id', id)
    return prisma.construction_diary.findFirst({
        where: {
            id
        },
        include: {
            activities: true,
            employees_diary: true
        }
    })

}



const constructionDiaryRepository = {
    getConstructionDiaryById,
    createDiaryLog,
    createDiary,
    getDiaryLog
}

export default constructionDiaryRepository