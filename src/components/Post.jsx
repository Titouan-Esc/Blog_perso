const Post = ({post}) => {
    return (
        <>
          {post.map((p) => {
              const {id, titre, contenu} = p;

              return(
                  <div key={id}>
                      <h1>{titre}</h1>
                      <p>{contenu}</p>
                  </div>
              )
          })}  
        </>
    )
}

export default Post
