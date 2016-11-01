import React from 'react';
import AsyncProps, { loadPropsOnServer } from 'async-props';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match } from 'react-router';

import Html from '../../../shared/components/html';
import routes from '../../../shared/routes';

function* react(next) {
  // eslint-disable-next-line global-require

  const matchResult = yield new Promise((resolve) => {
    match({ routes, location: this.path }, (matchErr, redirectLocation, renderProps) => {
      resolve({ matchErr, redirectLocation, renderProps });
    });
  });

  const { matchErr, redirectLocation, renderProps } = matchResult;

  if (matchErr) {
    this.throw(500, matchErr.message);
  }

  if (redirectLocation) {
    this.status = 302;
    this.redirect(redirectLocation.pathname + redirectLocation.search);
    return yield next;
  }

  if (!renderProps) {
    return yield next;
  }

  const propsResult = yield new Promise((resolve) => {
    loadPropsOnServer(renderProps, {}, (propsErr, asyncProps, scriptTag) => {
      resolve({ propsErr, asyncProps, scriptTag });
    });
  });

  const { propsErr, asyncProps, scriptTag } = propsResult;

  if (propsErr) {
    this.throw(propsErr.status || 500, propsErr);
  }

  const childMarkup = renderToString(
    <AsyncProps
      {...renderProps}
      {...asyncProps}
    />
  );

  // eslint-disable-next-line prefer-template
  this.body = '<!doctype html>' +
    renderToStaticMarkup(
      <Html
        head={childMarkup.headContent}
        markup={childMarkup}
        scriptTag={scriptTag}
      />
    );

  return yield next;
}

export default react;
