// props: { author: "", content: "" }

export function Post(props) {
    console.log(props)

    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

export default Post

// Default Exports vs Named Exports
// Default Exports
// export default Post
// Named Exports
// export function Post()