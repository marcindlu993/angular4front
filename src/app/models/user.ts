export interface IUser {
    access_token: string;
    token_type: string;
    expires_in: number;
    userName: string;
}
export class UserModel {
    Access_token: string;
    Token_type: string;
    Expires_in: number;
    UserName: string;

    constructor(user: IUser) {
        this.Access_token = user.access_token;
        this.Token_type = user.token_type;
        this.Expires_in = user.expires_in;
        this.UserName = user.userName;
    }
}
