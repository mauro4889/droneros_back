import { prisma } from "../..";


export class AddressCreateService {
    constructor() { }

    static async create({ city, street, cp, user }: any) {
        try {
            const created = await prisma.address.create({
                data: {
                    city,
                    street,
                    cp,
                    addressUser: {
                        connect: { id: user }
                    }
                }
            })

            return { success: true, created }
        } catch (error) {

        }
    }
}