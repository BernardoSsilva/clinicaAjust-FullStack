import { DiagnosisEntity } from '../../../../App/entites/diagnosi.entity';
import { DeleteDiagnosisUseCase } from '../delete.diagnosis.use.case';
import { InMemoryDiagnosisRepository } from './../../../../../test/in-memory-repositories/diagnosis.in-memory.repository';

describe('Delete schedule by id use case unit test', () => {
  it('Should be able to Delete a schedule by id', () => {
    const repository = new InMemoryDiagnosisRepository();
    const useCase = new DeleteDiagnosisUseCase(repository);
    const newDiagnosisData = new DiagnosisEntity({
      authorId: 'test id',
      description: 'test description',
      createdAt: new Date(),
      client: "test client",
      title: "test title"
    });
    repository.diagnosis.push(newDiagnosisData);

    expect(repository.diagnosis).toHaveLength(1);
    const result = useCase.execute(repository.diagnosis[0].id);
    expect(repository.diagnosis).toHaveLength(0);
  });
});
