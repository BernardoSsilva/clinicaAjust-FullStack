import { ImageInMemoryRepository } from '../../../../../test/in-memory-repositories/image.in-memory.repository';
import { ImageEntity } from '../../../../App/entites/image.entity';
import { FindAllImagesUseCase } from '../find.all.images.use.case';
import { FindImageByIdUseCase } from '../find.image.by.id.use.case';

describe('Get image by id use case unit test', () => {
  it('should be able to find  a image', () => {
    const repository = new ImageInMemoryRepository();
    const useCase = new FindImageByIdUseCase(repository);

    repository.images.push(
      new ImageEntity({
        createdAt: new Date(),
        diagnosisId: 'exampleId',
        stored: 'exampleStoredName',
        imageName: 'exampleName',
        sizeKb: 10,
      }),
    );
    const result = useCase.execute(repository.images[0].id);
    expect(result).toBeDefined();
  });
});
