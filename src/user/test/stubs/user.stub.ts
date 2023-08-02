import {User} from "../../models/user.model"

export const userStub = (): Partial<User> => {
    return {
        id: 1,
        name: "user",
        email: "user@mail.uz",
        password: "12345678",
        is_active: true
    }
}