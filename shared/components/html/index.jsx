import React, { PropTypes } from 'react';

function Html(props) {
  const markup = {
    __html: props.markup
  };

  const script = {
    __html: props.scriptTag
  };

  return (
    <html lang='en-US'>
      <head>
        <title>App</title>
        <link rel='stylesheet' href='/app.css' />
        {props.headContent}
      </head>
      <body>
        <div
          className='app-root'
          dangerouslySetInnerHTML={markup} // eslint-disable-line react/no-danger
        />
        <div
          dangerouslySetInnerHTML={script} // eslint-disable-line react/no-danger
        />
        <script src='/app.js' />
      </body>
    </html>
  );
}

Html.propTypes = {
  headContent: PropTypes.node,
  markup: PropTypes.string.isRequired,
  scriptTag: PropTypes.string.isRequired
};

export default Html;

