import { Entity } from '../../shared/entity';

type DiagnosisProps = {
  authorId: string;

  createdAt: Date;
  description: string;
};

export class DiagnosisEntity extends Entity<DiagnosisProps> {
  get authorId(): string {
    return this.props.authorId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
  get description(): string {
    return this.props.description;
  }
  set description(value: string) {
    this.description = value;
  }
}
