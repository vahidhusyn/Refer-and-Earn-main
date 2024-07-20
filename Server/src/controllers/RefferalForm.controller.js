import { PrismaClient } from '@prisma/client'

import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"

const prisma = new PrismaClient()


export const getRefferal = async (req, res) => {
    try {
        const response = await prisma.user.findMany()
        res.status(200).json(response)
    } catch (error) {
        throw new ApiError(409,`${error} "User with email or name doesn't exists"`)
    }
}

export const getRefferalById = async (req, res) => {
    try {
        const response = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        throw new ApiError(409,`${error} "User with email or name already exists"`)
    }
}

export const createRefferal = asyncHandler( async (req, res) => {
    const { firstName, lastName, email } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                firstName: firstName,
                lastName: lastName,
            },
        })
        res.status(201).json(user)
        console.log(user)
    } catch (error) {
        throw new ApiError(500, `${error} "Something went wrong while registering the user"`)
    }})
