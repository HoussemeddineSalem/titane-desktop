export class Member {
  public firstName: string;
  public lastName: string;
  public email: string;
  borrowedBooksIds: any[];

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
