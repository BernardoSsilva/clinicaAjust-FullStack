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

  constructor(props) {
    super(props);
    this.validate();
  }

  async validate(): Promise<string[]> {
    const errors: string[] = [];

    const diagnosisIdErrors = this.validateDiagnosisId(this.diagnosisId);
    const storedNameErrors = this.validateStored(this.stored);
    const imageNameErrors = this.validateImageName(this.imageName);
    const sizeKbErrors = this.validateSizeKb(this.sizeKb);

    if (diagnosisIdErrors) errors.push(diagnosisIdErrors);
    if (storedNameErrors) errors.push(storedNameErrors);
    if (imageNameErrors) errors.push(imageNameErrors);
    if (sizeKbErrors) errors.push(sizeKbErrors);
    return errors;
  }

  validateDiagnosisId(diagnosisId: string): string | null {
    if (!diagnosisId) return 'o Id do diagnostico é requirido';
    if (typeof diagnosisId !== 'string')
      return 'O id do diagnostico deve ser uma instancia de caracteres';
    return null;
  }
  validateStored(stored: string): string | null {
    if (!stored) return 'o nome da imagem armazenada é requirido';
    if (typeof stored !== 'string')
      return 'O nome da imagem armazenada deve ser uma instancia de caracteres';
    return null;
  }
  validateImageName(imageName: string): string | null {
    if (!imageName) return 'o nome da imagem  é requirido';
    if (typeof imageName !== 'string')
      return 'O nome da imagem  deve ser uma instancia de caracteres';
    return null;
  }
  validateSizeKb(sizeKb: number): string | null {
    if (!sizeKb) return 'o tamanho da imagem  é requirido';
    if (typeof sizeKb !== 'number')
      return 'O tamanho da imagem  deve ser uma instancia de números';
    return null;
  }
}
