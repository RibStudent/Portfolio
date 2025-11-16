import { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url
  const currentDate = new Date().toISOString()

  // Define your main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Add project pages dynamically
  const projectPages = DATA.projects.map((project, index) => ({
    url: `${baseUrl}/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // You can add blog post URLs here dynamically if you have them
  // const blogPosts = await getBlogPosts() // If you have a function to get blog posts
  // const blogPages = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt || post.createdAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  return [...mainPages, ...projectPages]
}