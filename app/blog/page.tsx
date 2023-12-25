export const dynamic = 'force-dynamic'

interface Post {
    title: string,
    content: string,
    slug: string,
}

interface Props {
    params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );

    const listPosts: any = posts.map((post) => {
        return (<li key={post.slug}>
            <h1>{post.title} </h1>
            <p> {post.content} </p>
        </li>)
    })

    return (
        <div>
            <ul>{listPosts}</ul>
        </div>
    )
}
