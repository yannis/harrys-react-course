import React from 'react';

export default function ResultsList(props) {
  return (
    <table>
      <caption>{props.description.en}</caption>
      {
        props.results.map((result, i) => {
          <tr key={i}>
            <td>${result}</td>
          </tr>
        })
      }
    </table>
  )
}
