//REUSABLE INTERFACES
interface QuestionResult {
  "category":string,
  "type":string,
  "difficulty":string,
  "question":string,
  "correct_answer":string,
  "incorrect_answers":string[]
}
interface Questions {
  "response_code":number,
  "results":QuestionResult[]
}
interface BtnProp {
  content: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

//CUSTOM INTERFACES
interface QuestionCardProp {
  qData: QuestionResult | undefined,
  children: React.ReactNode
}
interface ResultContentProps {
  question: string,
  answ: string
}
interface ThemeLayoutProps {
  children: React.ReactNode;
}
interface AnswerState {
  answers: string[];
}
interface CurrentIndexState {
  currentIndex: number;
}

//EXPORTANDO
export {
  QuestionResult,
  Questions,
  BtnProp,
  QuestionCardProp,
  ResultContentProps,
  ThemeLayoutProps,
  AnswerState,
  CurrentIndexState,
}