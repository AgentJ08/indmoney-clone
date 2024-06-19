import jwt from 'jsonwebtoken'
import { NextRequest } from "next/server"

export const getDataFromToken = (request: NextRequest) => {

    try {
        const token = request.cookies.get("indclone-token")?.value || '';

        if (token != '') {
            const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
            return decodedToken.id;
        }
        return null;

    } catch (error: any) {
        console.log('getDataFromToken', error.message);
        throw new Error(error.message);

    }
}