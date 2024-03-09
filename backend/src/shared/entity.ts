import { randomUUID } from 'crypto';

export class Entity<Props = any> {
  public id?:string;
  public props: Props;
  constructor(_id, _props) {
    this.id = _id || randomUUID();
    this.props = _props;
  }
}
