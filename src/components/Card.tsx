import React, { useEffect } from 'react'
import { QuestionResult } from "../../app"
import { useGetQuestionsQuery } from '../store/api/questionsApiSlice'

const Card = () => {

  useEffect(() => {
    async function fetchIt() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      const data = await res.json()
      
      console.log(data)
    
    }
    fetchIt()
  }, [])
  
  const {
    data,
    isLoading,
    isSuccess,
    error,
  } = useGetQuestionsQuery();
  let cardContent

  if (isLoading) {
    cardContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    cardContent = (
      <div>{data.map((e) => (<div>{e}</div>))}</div>
    )
  } else if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return cardContent = (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return cardContent = (
        <div>{error.message}</div>
      )
    }
  }

  return (
    <main>{cardContent}</main>
  )
}

export default Card