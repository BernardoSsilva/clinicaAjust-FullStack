import { Entity } from '../../shared/entity';

type ImageProps = {
  createdAt: Date;
  diagnosisId: string;
  stored: string;
  imageName: string;
  sizeKb: number;
};

export class ImageEntity extends Entity<ImageProps> {
  get createdAt(): Date {
    return this.props.createdAt;
  }

  get diagnosisId(): string {
    return this.props.diagnosisId;
  }

  get stored(): string {
    return this.props.stored;
  }

  set stored(value: string) {
    this.stored = value;
  }

  get imageName(): string {
    return this.props.imageName;
  }

  set imageName(value: string) {
    this.imageName = value;
  }

  set sizeKb(value: number) {
    this.sizeKb = value;
  }
  get sizeKb(): number {
    return this.props.sizeKb;
  }
}
