/**
 * API Utility Functions for BankVi Vitrine
 * Communicates with: https://bankvi-api.onrender.com/api/v1
 */

import { getBlogPostsResponse } from "@/type"
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

/**
 * Send a contact message to the BankVi API
 * Endpoint: POST /messages or /contact/messages
 */
export async function sendContactMessage(
  data: ContactMessage
): Promise<ApiResponse<any>> {
  try {
    // Try different endpoint patterns - adjust based on your API structure
    const endpoints = [
      '/messages',
      '/contact/messages',
      '/contact',
    ]

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` }),
          },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          const result = await response.json()
          return { success: true, data: result }
        }

        // If not found, try next endpoint
        if (response.status !== 404) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`)
        }
      } catch (error) {
        // Continue to next endpoint
        continue
      }
    }

    return {
      success: false,
      error: 'Impossible de trouver l\'endpoint de contact. Vérifiez la configuration API.',
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue'
    return {
      success: false,
      error: errorMessage,
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