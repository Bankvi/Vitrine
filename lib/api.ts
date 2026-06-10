/**
 * API Utility Functions for BankVi Vitrine
 * Communicates with: https://bankvi-api.onrender.com/api/v1
 */

import { getBlogPostsResponse, getFAQsReponse, FAQItem, ContactMessage, ContactMessageResponse } from "@/app/type"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'les apis'
{/** no need token at all*/}

/**
 * Get FAQs from the BankVi API
 * No endpoint at all
 */
export async function getFAQItems() : Promise<FAQItem> {
  try {
    const rep = await axios.get(`${API_BASE_URL}/public/faq`)
    if (rep.status === 200) {
      return rep.data as FAQItem;
    }else {
      throw new Error(`API Error: ${rep.status} ${rep.statusText}`)
    }
  }catch (error) {
    if (axios.isAxiosError(error)) {
      const message = "Axios Error: " + (error.response ? `${error.response.status} ${error.response.statusText}` : error.message)
      throw new Error(message)
    }
  }
}

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
    if (response.status === 200) {
      return {
        success: true,
        message: 'Message envoyé avec succès'
      } as ContactMessageResponse;
    } else {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
  }catch (error: any) {
    console.error('Error sending contact message:', error)
    const erorrMessage = error.response?.data?.message || error.message || 'Erreur inconnue'
    return {
      success: false,
      message: erorrMessage
    } as ContactMessageResponse;
  }
  {/**envoi des reponses */}
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