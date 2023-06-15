import { ConstructionSignup } from "@/protocols/constructionSignUpType";
import adminRepository from "@/repositories/admin-repository";
import clientsRepository from "@/repositories/clients-repository";
import constructionRepository from "@/repositories/constructions-repository";
import userRepository from "@/repositories/users-repository";
import { Client } from "../protocols/ClientType";

async function createConstruction({
  user_id,
  client_id,
  name,
}: ConstructionSignup) {
  const { id: admin_id } = await adminRepository.findAdminById(user_id);

  const {id: clientId} = await clientsRepository.findClientById(Number(client_id))


  

  const construction = await constructionRepository.createConstruction({
    admin_id,
    client_id: clientId,
    name,
  });
  return construction;
}

async function getConstructions(user_id: number) {
 
 const user_type = await checkUserType(user_id)

 if(user_type === 'admin') {
  const { id: admin_id } = await adminRepository.findAdminById(user_id);
   const constructions = await constructionRepository.getConstructions(admin_id, user_type);   
   return constructions;
 } else {
  const { id: client_id } = await clientsRepository.findClientByUserId(user_id);
  const constructions = await constructionRepository.getConstructions(client_id, user_type);
  return constructions;

 }

}

async function checkUserType(user_id:number) {
  const user = await userRepository.getUserById(user_id);
  if(user.user_type === "admin") return "admin"
  if(user.user_type === "client") return "client"
}

const constructionService = {
  createConstruction,
  getConstructions,
};

export default constructionService;
