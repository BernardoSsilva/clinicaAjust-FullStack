import { DiagnosisEntity } from '../diagnosi.entity';

describe('Unit tests for diagnosis entity', () => {
  it('Should be able to create a new diagnosis entity', () => {
    const newEntity = new DiagnosisEntity({
      authorId: 'test id',
      createdAt: new Date(),
      description: 'test description',
      client: 'test client',
      title: 'test title',
    });

    expect(newEntity.authorId).toBeDefined();
    expect(newEntity.title).toBeDefined();
    expect(newEntity.client).toBeDefined();
    expect(newEntity.createdAt).toBeInstanceOf(Date);
    expect(newEntity.description).toBeDefined();
  });
});
