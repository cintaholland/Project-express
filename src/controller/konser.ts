import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma: PrismaClient = new PrismaClient()
const konser = async (request: Request, response: Response) => {
    try {
        
        const eventname: string = (request.body.eventname)
        const eventdate: Date = (request.body.eventdate)
        const venue: string = (request.body.venue)
        const price: number = Number(request.body.price)
        const konser = await prisma.konser.create(
            {
                data: {
                    eventname,
                    price,
                    eventdate,
                    venue
                }
            }
        )
        return response.status(200).json({
            status: true,
            message: "data concert berhasil disimpan",
            data: konser

        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
export { konser }