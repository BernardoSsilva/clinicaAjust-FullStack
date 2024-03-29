import { InMemoryDiagnosisRepository } from '../../../../../test/in-memory-repositories/diagnosis.in-memory.repository';
import { DiagnosisEntity } from '../../../entites/diagnosi.entity';
import { UpdateDiagnosisUseCase } from '../update.diagnosis.use.case';

describe('Update schedule by id use case unit test', () => {
  it('Should be able to update a schedule by id', () => {
    const repository = new InMemoryDiagnosisRepository();
    const useCase = new UpdateDiagnosisUseCase(repository);
    const newDiagnosisData = new DiagnosisEntity({
      authorId: 'test Id',
      createdAt: new Date(),

      description: 'test description',
    });

    repository.diagnosis.push(newDiagnosisData);
    expect(repository.diagnosis[0].description).toEqual('test description');

    const result = useCase.execute(repository.diagnosis[0].id, {
      description: 'exampleNewValue',
    });
    expect(repository.diagnosis[0].description).toEqual('exampleNewValue');
  });
});
