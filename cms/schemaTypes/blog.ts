export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título do artigo do blog"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug do artigo do blog",
      options: {
        source: "title",
      }
    },
    {
      name: "titleImage",
      type: "image",
      title: "Imagem do artigo do blog"
    },
    {
      name: "smallDescription",
      type: "text",
      title: "Descrição curta do artigo do blog"
    },
    {
      name: "content",
      type: "array",
      title: "Conteúdo do artigo do blog",
      of: [
        {
          type: "block"
        }
      ]
    },

  ]
}