function DateTime() {
  return (
    <div className="blog__date__time">
      <i className="fa fa-history"> </i>
      <small>August 1st, 2021</small>
    </div>
  );
}

function FirstImage({ src }) {
  return <div className="blog__first__image" />;
}

function ReadMoreButton(props) {
  return (
    <button className="blog__read__more__btn" {...props}>
      Read more <i className="fa fa-angle-double-right" />
    </button>
  );
}

function TextContainer({ title, content }) {
  return (
    <div className="blog__text__container">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function PostCard({ title, content, id }) {
  return (
    <div className="blog__post__card">
      <FirstImage src="../../img/blog_pic.jpg" />
      <div className="blog__post__body">
        <DateTime />
        <TextContainer title={title} content={content} />
        <ReadMoreButton
          onClick={() =>
            window.location.assign(`../../pages/post.html?id=${id}`)
          }
        />
      </div>
    </div>
  );
}

function useFetchBlog() {
  const [blogs, setBlogs] = React.useState([]);

  const onFetchBlog = async () => {
    await fetch("https://desolate-everglades-85377.herokuapp.com/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setBlogs(res))
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    onFetchBlog();
  }, []);
  console.log(blogs);
  return [blogs];
}

function Posts() {
  const [blogs] = useFetchBlog();

  return (
    <div className="blog__posts">
      {blogs.map((arr, i) => (
        <PostCard key={i} {...arr} />
      ))}
    </div>
  );
}

ReactDOM.render(<Posts />, document.getElementById("post-wrap"));
