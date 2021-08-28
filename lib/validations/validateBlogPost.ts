import validator from 'validator'

interface validateBlogPostProps {
    slug: string
    title: string
    description: string
    tags: string[]
    readTime: string
    image: string
}

export default function validateBlogPost({
    slug,
    title,
    description,
    tags = [],
    readTime,
    image,
}: validateBlogPostProps) {
    if (!validator.isSlug(slug) || slug.length > 150) {
        throw 'Slug is not valid [between 0 to 150 chars]'
    } else if (
        !validator.isAlphanumeric(title, 'en-US', { ignore: ' ' }) ||
        title.length > 255
    ) {
        throw 'Title is not valid'
    } else if (
        !validator.isAlphanumeric(description, 'en-US', { ignore: ' ' }) ||
        description.length > 355
    ) {
        throw 'Description is not valid [between 0 to 355 chars]'
    } else if (!validator.isNumeric(readTime)) {
        throw 'Read time is not valid [must be a number]'
    } else if (!validator.isURL(image || '')) {
        console.log('happned')

        throw 'Image is not valid [URL]'
    } else if (tags.length > 10) {
        tags.forEach((tag: any) => {
            if (!validator.isAlphanumeric(tag)) {
                throw 'Tags is not valid [between 0 to 10 tags]'
            }
        })
    }
}
