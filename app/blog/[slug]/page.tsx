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
    console.log(params)
    console.log('--------')
    console.log(posts)
    const post = posts.find((post) => { post.slug == params.slug })!;
    console.log(post)
    return (
        <div>
            {/* <ul>{listPosts}</ul> */}
            <h1>{post.title} </h1>
            <p> {post.content} </p>
        </div>
    )
}
