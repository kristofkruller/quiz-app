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

export {
  QuestionResult,
  Questions,
  BtnProp
}