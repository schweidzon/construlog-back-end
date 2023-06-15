import prisma from "@/config/database";

async function logActivities(activity: string, diaryId: number) {
  console.log(activity);
  return prisma.activities.create({
    data: {
      description: activity,
      construction_diary_id: diaryId,
    },
  });
}

const activitiesRepository = {
  logActivities,
};

export default activitiesRepository;
