import { Entity } from '../../shared/entity';

type ScheduleProps = {
  scheduleDate: Date;
  authorId: string;
  createdAt: Date;
  client: string;
};
export class ScheduleEntity extends Entity<ScheduleProps> {
  get scheduleDate(): Date {
    return this.props.scheduleDate;
  }

  get authorId(): string {
    return this.props.authorId;
  }

  set client(value: string) {
    this.client = value;
  }

  get client(): string {
    return this.props.client;
  }

  constructor(props) {
    super(props);
    this.validate();
  }

  async validate(): Promise<string[]> {
    const errors: string[] = [];

    const authorIdErrors = this.validateAuthorId(this.authorId);
    const clientErrors = this.validateClient(this.client);

    if (authorIdErrors) errors.push(authorIdErrors);
    if (clientErrors) errors.push(clientErrors);

    return errors;
  }

  validateAuthorId(authorId: string): string | null {
    if (!authorId) return 'O id do autor é requirido';
    if (typeof authorId !== 'string')
      return 'O id do autor deve ser formada por texto';
    return null;
  }
  validateClient(client: string): string | null {
    if (!client) return 'O cliente é requirido';
    if (typeof client !== 'string')
      return 'O nome do cliente deve ser formado por texto';
    return null;
  }
}
