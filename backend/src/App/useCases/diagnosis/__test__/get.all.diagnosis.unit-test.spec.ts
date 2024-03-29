import { DiagnosisEntity } from '../../../entites/diagnosi.entity';
import { FindAllDiagnosisUseCase } from '../find.all.diagnosis.use.case';
import { InMemoryDiagnosisRepository } from './../../../../../test/in-memory-repositories/diagnosis.in-memory.repository';

describe('Get all diagnosis use case unit test', () => {
  it('should be able to find all schedules', () => {
    const repository = new InMemoryDiagnosisRepository();
    const useCase = new FindAllDiagnosisUseCase(repository);

    repository.diagnosis.push(
      new DiagnosisEntity({
        authorId: 'test id',
        createdAt: new Date(),
        client: 'test client',
        title: 'test title',
        description: 'Test description',
      }),
    );
    const result = useCase.execute();
    expect(result).toBeDefined();
  });
});
