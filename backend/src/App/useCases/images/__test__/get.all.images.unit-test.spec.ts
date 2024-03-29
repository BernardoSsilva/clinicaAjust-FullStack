import { ImageInMemoryRepository } from '../../../../../test/in-memory-repositories/image.in-memory.repository';
import { ImageEntity } from '../../../../App/entites/image.entity';
import { FindAllImagesUseCase } from '../find.all.images.use.case';

describe('Get all images use case unit test', () => {
  it('should be able to find all images', () => {
    const repository = new ImageInMemoryRepository();
    const useCase = new FindAllImagesUseCase(repository);

    repository.images.push(
      new ImageEntity({
        createdAt: new Date(),
        diagnosisId: 'exampleId',
        stored: 'exampleStoredName',
        imageName: 'exampleName',
        sizeKb: 10,
      }),
    );
    const result = useCase.execute();
    expect(result).toBeDefined();
  });
});
