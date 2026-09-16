# Pasta de Mídias e Imagens — Bel Lar Empreendimento

Esta pasta (`public/midia/`) é o local oficial para você colocar todas as imagens, fotos e mídias do site.

No Next.js, qualquer arquivo colocado dentro de `public/` fica acessível diretamente pelo navegador usando a rota `/midia/...`.

---

## 📁 Estrutura de Pastas Sugerida

- **`hero/`**: Imagens do banner principal
  - `hero-azul.webp` ou `hero-azul.jpg` (fachada à esquerda)
  - `hero-laranja.webp` ou `hero-laranja.jpg` (edifício / projeto à direita)
- **`sobre/`**: Fotos da seção Sobre Nós
  - `canteiro-1.jpg` (foto vertical 1)
  - `canteiro-2.jpg` (foto vertical 2)
  - `diretor.jpg` (foto do perfil de Ricardo Almeida)
- **`projetos/`**: Fotos dos projetos e mosaico
  - `guindaste.jpg` (operação de obras)
  - `interiores.jpg` (foto ampla de interiores)
- **`obras/`**: Obras em andamento e qualidade
  - `obra-destaque.jpg` (banner escuro)
  - `supervisao.jpg` (supervisão técnica)
  - `equipe.jpg` (execução)
  - `arquitetura-noturna.jpg` (casa / edifício iluminado)
- **`blog/`**: Imagens para os artigos
  - `artigo-1.jpg`
  - `artigo-2.jpg`
  - `artigo-3.jpg`

---

## 💡 Como usar nos componentes

Exemplo de uso com o componente `next/image`:

```tsx
<Image
  src="/midia/hero/hero-azul.jpg"
  alt="Fachada Bel Lar"
  fill
  className="object-cover"
/>
```
