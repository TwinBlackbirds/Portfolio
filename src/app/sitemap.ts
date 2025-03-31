import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://twinblackbirds.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            images: ['https://twinblackbirds.com/pfp.jpg']
        },
        {
            url: 'https://twinblackbirds.com/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            images: ['https://twinblackbirds.com/assets/library.png', 'https://twinblackbirds.com/blog_assets/object_tracker/tracker-cover.jpg'],
        },
        {
            url: 'https://twinblackbirds.com/blog/object_tracker',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5,
            images: ['https://twinblackbirds.com/blog_assets/object_tracker/ball.gif', 'https://twinblackbirds.com/blog_assets/object_tracker/tracked-ball.gif'],
        },
    ]
}