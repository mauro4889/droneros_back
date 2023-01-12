import { PrismaClient } from "@prisma/client"
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';

import authRoutes from './routes/auth.routes'
import categoryRoutes from './routes/category.routes'
import productsRoutes from './routes/products.routes'
import addressRoutes from './routes/address.routes'
import resumeRoutes from './routes/resume.routes'

dotenv.config()

export const prisma = new PrismaClient()

const server = express()

server.use(express.json());
server.use(cors());

server.use('/auth', authRoutes)
server.use('/category', categoryRoutes)
server.use('/products', productsRoutes)
server.use('/address', addressRoutes)
server.use('/resume', resumeRoutes)

server.listen(process.env.PORT, ()=>{
    console.log(`Funcionando en el puerto ${process.env.PORT}`)
})