import { ImageEntity } from '../image.entity';

describe('Image entity unit test', () => {
  it('Should be able to create a new image entity', () => {
    const newImageEntity = new ImageEntity({
      createdAt: new Date(),
      diagnosisId: 'testId',
      stored: 'testStoredName',
      imageName: 'testName',
      sizeKb: 45,
    });

    expect(newImageEntity).toBeDefined();
  });
});
