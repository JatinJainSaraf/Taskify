import { Response } from "express";
import { loginbody } from "../../types";
import Views from "../../views";
import { loginUserValidation } from "./userValidations";

export default async function loginUserController({ body: { email, password } }: { body: loginbody }, res: Response) {
    try {
        await loginUserValidation.validateAsync({ email, password }, { abortEarly: false })
        const loginUserViewsRes = await Views.userViews.loginUserViews({ email, password })


        res.status(200).json(loginUserViewsRes)
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}