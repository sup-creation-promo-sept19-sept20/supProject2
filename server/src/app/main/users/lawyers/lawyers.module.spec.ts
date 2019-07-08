import { LawyersModule } from './lawyers.module';

describe('LawersModule', () => {
  let lawersModule: LawyersModule;

  beforeEach(() => {
    lawersModule = new LawyersModule();
  });

  it('should create an instance', () => {
    expect(lawersModule).toBeTruthy();
  });
});
