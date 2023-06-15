export type CreateLog = {
    jobsObjt: Jobs[];
    dayActivities: string[];
    clientId: number;
  };
  
  export type Jobs = {
    job: string,
    quantity: number
  }