export class UserId {
  private readonly _value: string;

  constructor(value: string) {
    this.validate(value);
    this._value = value;
  }

  get value() {
    return this._value;
  }

  private validate(userId: string) {
    if (!userId.startsWith('usr_')) {
      throw new Error('This is an invalid user ID format.');
    }
  }
}
