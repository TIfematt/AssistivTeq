

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-16'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = false
// export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN
export const url = process.env.NEXT_PUBLIC_SANITY_URL