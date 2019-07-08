import { AdminsListModule } from './admins-list.module';

describe('UsersListModule', () => {
  let adminsListModule: AdminsListModule;

  beforeEach(() => {
    adminsListModule = new AdminsListModule();
  });

  it('should create an instance', () => {
    expect(adminsListModule).toBeTruthy();
  });
});
