export class UserModel {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: number;
    token: string;
    constructor (data: any) {
        if (data) {
            this.id = data.id;
            this.username = data.username;
            this.password = data.password;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.role = data.role;
        }
    }
}