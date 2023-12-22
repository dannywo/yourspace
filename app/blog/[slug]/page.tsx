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
    console.log(params)
    console.log('--------')
    console.log(posts)
    const post = posts.find((post) => { post.slug === params.slug })!;
    console.log(post)
    // return (
    //     <div>
    //     <h1>{ post.ti } < /h1>
    //     < p > { post.content } < /p>
    //     < /div>
    // )
    // < div >
    // <h1>{ post.title } < /h1>
    // < p > { post.content } < /p>
    // < /div>



}
