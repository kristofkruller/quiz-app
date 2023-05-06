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

export {
  QuestionResult,
  Questions
}