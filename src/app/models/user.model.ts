export class UserModel {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public city: string = '',
    public isAdmin: boolean = false,
    public isConnected: boolean = false
  ) {
  }
}
