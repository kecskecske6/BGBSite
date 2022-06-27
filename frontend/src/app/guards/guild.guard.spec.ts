import { TestBed } from '@angular/core/testing';

import { GuildGuard } from './guild.guard';

describe('GuildGuard', () => {
  let guard: GuildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
