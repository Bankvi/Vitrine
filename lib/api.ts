/**
 * API Utility Functions for BankVi Vitrine
 * Communicates with: https://bankvi-api.onrender.com/api/v1
 */

import { getBlogPostsResponse, getFAQsReponse, FAQItem } from "@/app/type"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://bankvi-api.onrender.com/api/v1'
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

interface ContactMessage {
  nom: string
  email: string
  sujet: string
  message: string
}

interface FAQsResponse {
  success: boolean
  message: string
  data: FAQItem[]
}

/**
 * Get FAQs from the BankVi API
 * No endpoint at all
 */

export async function getFAQs() : Promise<getFAQsReponse> {
  try {
    const rep = await axios.get(`${API_BASE_URL}/public/faq`)
    if (rep.status === 200) {
      return rep.data as getFAQsReponse;
    } else {
      throw new Error(`API Error: ${rep.status} ${rep.statusText}`)
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = "Axios Error: " + (error.response ? `${error.response.status} ${error.response.statusText}` : error.message)
      return {
        success: false,
        message,
        data: []
      }
    } else {
      throw new Error('Erreur inconnue')
    }
  }
}

/**
 * Send a contact message to the BankVi API
 * Endpoint: POST /messages or /contact/messages
 * using axios instead of fetch for better error handling and timeout support
 */
export async function sendContactMessage(data: ContactMessage) {
  try {
    const response = await axios.post(`${API_BASE_URL}/public/contact`, data );
    return {
      success: true,
      message: 'Erreur lors de l\'envoi du message'
    }
  }catch (error: any) {
    console.error('Error sending contact message:', error)
    const erorrMessage = error.response?.data?.message || error.message || 'Erreur inconnue'
    return {
      success: false,
      error: erorrMessage
    }
  }
}



/**
 * Generic API call function
 * Use this for custom API calls
 */
export async function apiCall<T = any>(
  endpoint: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: Record<string, any>
    headers?: Record<string, string>
  } = {}
): Promise<ApiResponse<T>> {
  try {
    const { method = 'GET', body, headers = {} } = options

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` }),
        ...headers,
      },
      ...(body && { body: JSON.stringify(body) }),
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue'
    return {
      success: false,
      error: errorMessage,
    }
  }
}

/**
 * Get products/services from API
 * Endpoint: GET /products or /services
 */
export async function getProducts() {
  return apiCall('/products')
}

/**
 * Get articles/blog posts
 * Endpoint: GET /articles or /blog
 */
export async function getArticles() {
  return apiCall('/articles')
}

/**
 * Get documentation sections
 * Endpoint: GET /documentation
 */
export async function getDocumentation() {
  return apiCall('/documentation')
}


export async function getBlogPosts(){

  try{
    const rep = await axios.get(`${API_BASE_URL}/public/blog`)

    if (rep.status === 200){
      return rep.data as getBlogPostsResponse;
    }else{
      throw new Error(`API Error: ${rep.status} ${rep.statusText}`)
    }

  }catch(error){
    if (axios.isAxiosError(error)){
      const message = "Axios Error: " + (error.response ? `${error.response.status} ${error.response.statusText}` : error.message)
      return {
        success: false,
        message,
        data: []
      } as getBlogPostsResponse
    }
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
      data: []
    }
  }
}