import { join } from 'path'
import matter from 'gray-matter'

export function getPostSlugs(subdir) {
    const fs = require("fs");
    const projectsDirectory = join(process.cwd(), `content/${subdir}`)
    return fs.readdirSync(projectsDirectory)
}

export function getPostBySlug(subdir, slug, fields = []) {
    const items = {}
    if (slug != null) {
        const fs = require("fs");

        const contentDir = join(process.cwd(), `content/${subdir}`)
        const realSlug = slug.replace(/\.md$/, '')
        const fullPath = join(contentDir, `${realSlug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)


        // Ensure only the minimal needed data is exposed
        fields.forEach((field) => {
            if (field === 'slug') {
                items[field] = realSlug
            }
            if (field === 'content') {
                items[field] = content
            }

            if (data[field]) {
                items[field] = data[field]
            }
        })
    } else {
        console.log("Slug given was null")
    }

    return items
}

export function getAllPostsBySubdir(subdir, fields = []) {
    const slugs = getPostSlugs(subdir)
    const posts = slugs
        .map((slug) => getPostBySlug(subdir, slug, fields))
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    return posts
}
