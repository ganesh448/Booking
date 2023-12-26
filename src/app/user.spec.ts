import { User } from './user';
describe('User', () => {
  it('should create an instance', () => {
    const user = new User();
    user.id = 1;
    user.name = 'Janu';
    user.email = 'Janu@gmail.com';
    user.phoneNo = '1234567890';
    user.address = 'Tirupati';
    user.password = 'password123';

    expect(user).toBeTruthy();
  });
});
