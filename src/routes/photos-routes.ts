import prisma from "@/config/database";
import { Request, Response, Router } from "express";
import multer from "multer";
import path from "path";

const multerConfig = require("../config/multer");

const photoRoutes = Router();

photoRoutes.post(
  "/upload",
  multer(multerConfig).single("image"),
  async (req: Request, res: Response) => {
    console.log(req.file)
    const { originalname: name, size, filename: key } = req.file;
    const post = await prisma.photos_diary.create({
      data: {
        description: "Test1",
        url: req.file.path,
        construction_diary_id: 1,
        key,
        size,
        name,
        
      },
    });

    return res.send(post)
  }
  
);


photoRoutes.get("/:name", (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      console.log(name)
      const caminhoImagem = path.resolve(__dirname, 'tmp', 'uploads', name);
      console.log(caminhoImagem)

      res.sendFile(caminhoImagem, { headers: { 'Content-Type': 'image/png' } });
    } catch (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar o arquivo de imagem');
    }
  });

export default photoRoutes;
