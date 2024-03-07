import { useState, useEffect } from 'react'
import axios from 'axios'

const useCategory = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/events')
        setCategory(response.data)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchCategory()
  }, [])

  return category.map((activity_category) => activity_category.activity_name)
}

export default useCategory
