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
    const supabase = await createClient()

    const { error } = await supabase.rpc('increment_page_view', {
      p_page_name: pageName,
    })

    if (error) {
      console.error(`[trackPageView] Erro ao registrar visualização de "${pageName}":`, error.message)
      return { success: false, pageName, error: error.message }
    }

    return { success: true, pageName }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Erro interno desconhecido'
    console.error(`[trackPageView] Falha na execução da action:`, errorMessage)
    return { success: false, pageName, error: errorMessage }
  }
}
