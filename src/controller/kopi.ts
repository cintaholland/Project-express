import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma: PrismaClient = new PrismaClient()
const kopi = async(request: Request, response: Response) => {
    try {
        const nama : string =(request.body.nama)  
        const code: string =(request.body.code)
        const variant: string = (request.body.variant)
        const harga: number = Number(request.body.harga)
        const newData = await prisma.kopi.create(
            {
                data:{
                    nama,
                    harga, 
                    code,
                    variant
                }
            }
        )
        return response.status(200).json({
            status: true,
            message: "data kopi berhasil disimpan",
            data: newData

        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
export {kopi}