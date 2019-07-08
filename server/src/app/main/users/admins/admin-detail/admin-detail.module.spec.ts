import { AdminDetailModule } from './admin-detail.module';

describe('AdminDetailModule', () => {
  let adminDetailModule: AdminDetailModule;

  beforeEach(() => {
    adminDetailModule = new AdminDetailModule();
  });

  it('should create an instance', () => {
    expect(adminDetailModule).toBeTruthy();
  });
});
