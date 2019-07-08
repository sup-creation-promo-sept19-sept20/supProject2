import { ConnectModule } from './connect.module';

describe('ConnectModule', () => {
  let authModule: ConnectModule;

  beforeEach(() => {
    authModule = new ConnectModule();
  });

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
