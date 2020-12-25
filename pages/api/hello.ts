import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse){
    if (!req.body){
        res.statusCode = 404
        res.end('Error')
        return
    }

    
}