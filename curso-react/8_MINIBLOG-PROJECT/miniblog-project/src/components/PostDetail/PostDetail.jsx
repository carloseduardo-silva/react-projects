import React from 'react'
import styles from "./PostDetail.module.css"

export const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>

        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p className={styles.createdby}>{post.createdBy}</p>
        <div className={styles.tags}>
            {post.tags.map((tag) => (

                <p key={tag}>

                    <span>#</span>
                    {tag}
                </p>
            ))}

        </div>


    </div>
  )
}
