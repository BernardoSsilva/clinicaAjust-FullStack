import { InMemoryDiagnosisRepository } from '../../../../../test/in-memory-repositories/diagnosis.in-memory.repository';
import { CreateDiagnosisUseCase } from '../create.diagnosis.use.case';

describe('Create a new diagnosis  use case unit tests', () => {
  it('Should be able to create a new diagnosis', async () => {
    const repository = new InMemoryDiagnosisRepository();
    const useCase = new CreateDiagnosisUseCase(repository);
    const newDiagnosisData = {
      authorId: 'test id',
      description: 'test description',
    };

    await useCase.execute(newDiagnosisData);

    expect(repository.diagnosis[0]).toBeDefined();
  });
});
