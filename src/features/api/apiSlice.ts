import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type EnquiryPayload = {
  name: string
  phone: string
  email?: string
  service: string
  propertyType?: string
  preferredDate?: string
  preferredTime?: string
  message: string
}

const sleep = (ms:number) => new Promise((resolve)=>setTimeout(resolve,ms))

export const api = createApi({
  reducerPath: 'aOneApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL || '/api' }),
  endpoints: (builder) => ({
    submitQuote: builder.mutation<{success:boolean;message:string}, EnquiryPayload>({
      queryFn: async () => {
        // Mock adapter. Replace with: { url:'/quotes', method:'POST', body:payload }
        await sleep(700)
        return { data:{success:true,message:'Demo submitted. Connect the Spring Boot API to deliver enquiries.'} }
      },
    }),
    submitContact: builder.mutation<{success:boolean;message:string}, EnquiryPayload>({
      queryFn: async () => {
        await sleep(700)
        return { data:{success:true,message:'Demo submitted. Connect the Spring Boot API to deliver enquiries.'} }
      },
    }),
  }),
})
export const { useSubmitQuoteMutation, useSubmitContactMutation } = api