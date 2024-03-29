import { ImageInMemoryRepository } from '../../../../../test/in-memory-repositories/image.in-memory.repository';
import { ImageEntity } from '../../../../App/entites/image.entity';
import { CreateImageUseCase } from '../create.image.use.case';

describe('Create a new schedule  use case unit tests', () => {
  it('Should be able to create a new schedule', async () => {
    const repository = new ImageInMemoryRepository();
    const useCase = new CreateImageUseCase(repository);
    const newScheduleData = new ImageEntity({
      createdAt: new Date(),
      diagnosisId: 'exampleId',
      stored: 'exampleStoredName',
      imageName: 'exampleName',
      sizeKb: 10,
    });

    await useCase.execute(newScheduleData);

    expect(repository.images[0]).toBeDefined();
  });
});
