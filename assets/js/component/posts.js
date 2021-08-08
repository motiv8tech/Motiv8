function DateTime(props) {
  return (
    <div className="blog__date__time">
      <i className="fa fa-history"> </i>
      <small>{date(props.date)}</small>
    </div>
  );
}

function date(date) {
  return new Date(date).toLocaleDateString();
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

function PostCard({ title, content, id, date_posted }) {
  return (
    <div className="blog__post__card">
      <FirstImage src="../../img/blog_pic.jpg" />
      <div className="blog__post__body">
        <DateTime date={date_posted} />
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
