'use server'

import { createClient } from '@/utils/supabase/server'

export interface PageViewResult {
  success: boolean
  pageName: string
  error?: string
}

/**
 * Incrementa atômica e seguramente o contador de visualizações
 * da página especificada através da RPC do Supabase.
 */
export async function trackPageView(pageName: string): Promise<PageViewResult> {
  try {
    // Se as credenciais do Supabase não estiverem definidas, sai silenciosamente
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return { success: false, pageName, error: 'Supabase não configurado' }
    }

    const supabase = await createClient()

    const { error } = await supabase.rpc('increment_page_view', {
      p_page_name: pageName,
    })

    if (error) {
      // Retorna o erro sem disparar console.error para não travar o overlay de dev do Next.js
      return { success: false, pageName, error: error.message }
    }

    return { success: true, pageName }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Erro interno desconhecido'
    return { success: false, pageName, error: errorMessage }
  }
}
