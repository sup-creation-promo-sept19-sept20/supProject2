export enum QuestionType {inputText = 'input-text', inputNumber = 'input-number', inputDate = 'input-date', select = 'select', selectMulti = 'select-multi', radio = 'radio', checkbox = 'checkbox'}

export interface QuestionInterface {
  uid?: string;
  weight?: number;
  position?: number;
  section?: number;
  type?: QuestionType;
  name?: string;
  title?: string;
  subtitle?: string;
  placeholder?: string;
  description_long?: string;
  description_short?: string;
  value?: string;
  // public parent?: Question,
  // public children?: Question[],
}
