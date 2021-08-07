function DateTime() {
  return (
    <div className="blog__date__time">
      <i className="fa fa-history"> </i>
      <small>August 1st, 2021</small>
    </div>
  );
}

function Post() {
  return (
    <div>
      <h2>Achieving Sustainability</h2>
      <DateTime />
      <p>
        Sustainability is the ability to optimize the use of rsourcess in the
        enviorment without destroying the ability of the futur generation to do
        so
      </p>
    </div>
  );
}

ReactDOM.render(<Post />, document.getElementById("post-wrap"));
