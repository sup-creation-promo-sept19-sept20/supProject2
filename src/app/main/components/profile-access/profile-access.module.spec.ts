import { ProfileAccessModule } from './profile-access.module';

describe('ProfileAccessModule', () => {
  let profileAccessModule: ProfileAccessModule;

  beforeEach(() => {
    profileAccessModule = new ProfileAccessModule();
  });

  it('should create an instance', () => {
    expect(profileAccessModule).toBeTruthy();
  });
});
