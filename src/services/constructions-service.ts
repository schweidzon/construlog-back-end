import { ConstructionSignup } from "@/protocols/constructionSignUpType";
import adminRepository from "@/repositories/admin-repository";
import constructionRepository from "@/repositories/constructions-repository";

async function createConstruction({
  user_id,
  client_id,
  name,
}: ConstructionSignup) {
  const { id: admin_id } = await adminRepository.findAdminById(user_id);

  const construction = await constructionRepository.createConstruction({
    admin_id,
    client_id,
    name,
  });
  return construction;
}

async function getConstructions() {
  const constructions = await constructionRepository.getConstructions();
  return constructions;
}

const constructionService = {
  createConstruction,
  getConstructions,
};

export default constructionService;
