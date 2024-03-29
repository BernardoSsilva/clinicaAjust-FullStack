import { Entity } from '../../shared/entity';

type DiagnosisProps = {
  authorId: string;
  client: string;
  title: string;
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

  get client(): string {
    return this.props.client;
  }

  set client(value: string) {
    this.props.client = value;
  }

  get title(): string {
    return this.props.title;
  }

  set title(value: string) {
    this.props.title = value;
  }

  constructor(props) {
    super(props);
    this.validate();
  }

  async validate(): Promise<string[]> {
    const errors: string[] = [];
    const authorIdErrors = this.validateAuthorId(this.authorId);
    const clientErrors = this.validateClient(this.client);
    const titleErrors = this.validateTitle(this.title);
    const createDateErrors = this.validateCreatedDate(this.createdAt);
    const descriptionErrors = this.validateDescription(this.description);

    if (authorIdErrors) errors.push(authorIdErrors);
    if (clientErrors) errors.push(clientErrors);
    if (titleErrors) errors.push(titleErrors);
    if (createDateErrors) errors.push(createDateErrors);
    if (descriptionErrors) errors.push(descriptionErrors);
    return errors;
  }

  validateAuthorId(authorId: string): string | null {
    if (!authorId) return 'author id is required';
    if (typeof authorId !== 'string')
      return 'the author id must be a instance of string';
    return null;
  }

  validateClient(client: string): string | null {
    if (!client) return 'client is required';
    if (typeof client !== 'string')
      return 'client must be a instance of string';
    if (client.length == 0)
      return 'client name must have a length bigger than 0';
    return null;
  }

  validateTitle(title: string): string | null {
    if (!title) return 'title is required';
    if (title.length == 0) return 'title must have a length bigger than 0';
    if (typeof title !== 'string') return 'title must be a instance of string';
    return null;
  }

  validateCreatedDate(createdDate: Date): string | null {
    if (!createdDate) return 'creation date is required';
    if (createdDate! instanceof Date)
      return 'creation date must be a instance of date';
    return null;
  }

  validateDescription(description: string): string | null {
    if (!description) return 'description is required';
    if (typeof description !== 'string') return 'description must be a string';
    if (description.length == 0)
      return 'description must be have length bigger than 0';
    return null;
  }
}
