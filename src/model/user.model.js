export class userModel {
  constructor(token, username, email) {
    this.token = token;
    this.user = {
      username: username,
      email: email,
    };
  }
}
