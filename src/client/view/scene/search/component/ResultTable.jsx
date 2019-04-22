import React from 'react';
import Loading from 'Module/loading';

class ResultTable extends React.Component {
  renderTbody(tweets) {
    const { data, isFetching } = this.props;
    if (isFetching) {
      return (
        <tbody>
          <tr>
            <td>
              <Loading />
            </td>
          </tr>
        </tbody>
      );
    } else if (data instanceof Array && data.length > 0) {
      return (
        <tbody>
          {
            tweets.map((tweet, index) => {
              const text = tweet.text.slice(0,50);
              const hashtags = tweet.hashtags.slice(0,2).join(', ');
              const dateArr = tweet.date.split(' ');
              const dateStr = `${dateArr[4]} ${dateArr[3]} ${dateArr[5]}`;
              return (
                <tr key={`tweet${index}`}>
                  <td>{text.length === 50 ? `${text}...` : text}</td>
                  <td>{tweet.likes || '-'}</td>
                  <td>{tweet.replies || '-'}</td>
                  <td>{tweet.retweets || '-'}</td>
                  <td>{hashtags}</td>
                  <td>{dateStr}</td>
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