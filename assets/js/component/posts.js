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

function PostCard() {
  return (
    <div className="blog__post__card">
      <FirstImage src="../../img/blog_pic.jpg" />
      <div className="blog__post__body">
        <DateTime />
        <TextContainer
          title="Achieving Sustainability"
          content="Sustainability is the ability to optimize the use of rsourcess in the
        enviorment without destroying the ability of the futur generation to do
        so"
        />
        <ReadMoreButton
          onClick={() => window.location.assign("../../pages/post.html?id=40")}
        />
      </div>
    </div>
  );
}

function useFetchBlog() {
  const [blogs, setBlogs] = React.useState();

  const onFetchBlog = async () => {
    console.log("ello world");
    await fetch("https://pacific-plateau-65675.herokuapp.com/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
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
  console.log(blogs);
  return (
    <div className="blog__posts">
      {Array.from({ length: 5 }).map((arr, i) => (
        <PostCard key={i} />
      ))}
    </div>
  );
}

ReactDOM.render(<Posts />, document.getElementById("post-wrap"));
