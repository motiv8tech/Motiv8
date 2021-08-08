function DateTime() {
  return (
    <div className="blog__date__time">
      <i className="fa fa-history"> </i>
      <small>August 1st, 2021</small>
    </div>
  );
}
function useFetchPost() {
  const [post, setPost] = React.useState({});
  var query = window.location.search.substring(1);
  var id = query.split("=")[1];

  const onFetchBlog = async () => {
    await fetch(
      `https://desolate-everglades-85377.herokuapp.com/blog/post/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    onFetchBlog();
  }, []);
  return [post];
}

function Post() {
  const [post] = useFetchPost();

  return (
    <div>
      <h2>{post.title}</h2>
      <DateTime />
      <p>{post.content}</p>
    </div>
  );
}

ReactDOM.render(<Post />, document.getElementById("post-wrap"));
