import { ImageInMemoryRepository } from '../../../../../test/in-memory-repositories/image.in-memory.repository';
import { ImageEntity } from '../../../../App/entites/image.entity';
import { DeleteImageUseCase } from '../delete.image.use.case';

describe('Delete image use case unit test', () => {
  it('should be able to Delete a image', () => {
    const repository = new ImageInMemoryRepository();
    const useCase = new DeleteImageUseCase(repository);

    repository.images.push(
      new ImageEntity({
        createdAt: new Date(),
        diagnosisId: 'exampleId',
        stored: 'exampleStoredName',
        imageName: 'exampleName',
        sizeKb: 10,
      }),
    );
    expect(repository.images[0]).toBeDefined();
    useCase.execute(repository.images[0].id);
    expect(repository.images).toHaveLength(0);
  });
});
