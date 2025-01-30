import React from 'react'
import styles from "./Blog.module.css"

export const Blog = () => {
  return (
    <div className={styles.blog_container}>
       <div className={styles.info_container}>
        <img src="" alt="" />
        <div>
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta mollitia praesentium itaque laborum doloribus optio at dolore architecto error? Fuga quaerat ut molestias veniam quas vitae voluptatem accusamus reprehenderit?</p>
          </div>
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta mollitia praesentium itaque laborum doloribus optio at dolore architecto error? Fuga quaerat ut molestias veniam quas vitae voluptatem accusamus reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta mollitia praesentium itaque laborum doloribus optio at dolore architecto error? Fuga quaerat ut molestias veniam quas vitae voluptatem accusamus reprehenderit optio at dolore architecto error? Fuga quaerat ut molestias veniam quas vitae voluptatem accusamus reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta mollitia praesentium itaque laborum doloribus optio at</p>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta mollitia praesentium itaque laborum doloribus optio at dolore architecto error? Fuga quaerat ut molestias veniam quas vitae voluptatem accusamus reprehenderit?</p>
        </div>
       </div>

      <div className={styles.carrousel_container}></div>

    </div>
  )
}
