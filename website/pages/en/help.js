/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [introduction doc](${docUrl(
        'doc1.html',
      )})`,
      title: 'Quick start',
    },
    {
      content: `Read the essay on the [technical walkthrough method](${siteConfig.walkthrough_method})`,
      title: 'Walkthrough Method',
    },
    {
      content: `Learn more about [terms and conditions](${siteConfig.terms}) Spotify has`,
      title: 'Terms and conditions',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need more resources?</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
