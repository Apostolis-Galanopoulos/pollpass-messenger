import { Kind } from '../enums/kind.enum';
import { Meta } from './delivery-meta.model';

export type DeliveryMessage = {
  answers: unknown,
  created_at: string,
  id: string,
  kind: Kind,
  question_id: string,
  meta: Meta,
};
