import React from 'react';

class ResultTable extends React.Component {
  renderTbody(tweets) {
    const { data } = this.props;
    if (data instanceof Array && data.length > 0) {
      return (
        <tbody>
          {
            tweets.map((tweet, index) => {
              return (
                <tr key={`tweet${index}`}>
                  <td>{tweet.text}</td>
                  <td>{tweet.likes}</td>
                  <td>{tweet.replies}</td>
                  <td>{tweet.retweets}</td>
                  <td>{tweet.hashtags.toString()}</td>
                  <td>{tweet.date}</td>
                </tr>
              )
            })
          }
        </tbody>
      );
    } else {
      return (
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      );
    }
  }
  renderEmpty() {

  }
  render() {
    const { data } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Tweet</th>
            <th>Likes</th>
            <th>Replies</th>
            <th>Retweets</th>
            <th>Hashtag</th>
            <th>Date</th>
          </tr>
        </thead>
        { this.renderTbody(data) }
      </table>
    );
  }
}

export default ResultTable;