import { InMemoryDiagnosisRepository } from '../../../../../test/in-memory-repositories/diagnosis.in-memory.repository';
import { DiagnosisEntity } from '../../../entites/diagnosi.entity';
import { FindDiagnosisByIdUseCase } from '../find.diagnosis.by.id.use.case';
describe('Find schedule by id use case unit test', () => {
  it('Should be able to find a schedule by id', () => {
    const repository = new InMemoryDiagnosisRepository();
    const useCase = new FindDiagnosisByIdUseCase(repository);
    const newScheduleData = new DiagnosisEntity({
      authorId: 'test id',
      createdAt: new Date(),
      description: 'test description',
    });

    repository.diagnosis.push(newScheduleData);

    const result = useCase.execute(repository.diagnosis[0].id);

    expect(result).toBeDefined();
  });
});
