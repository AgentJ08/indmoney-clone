import jwt from 'jsonwebtoken'
import { NextRequest } from "next/server"

export const getUserIdFromToken = (request: NextRequest) => {

    try {
        const token = request.cookies.get("indclone-token")?.value || '';

        if(token=='') return ''

        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);

        return decodedToken.id;

    } catch (error: any) {
        throw new Error(error.message)
        
    }
}