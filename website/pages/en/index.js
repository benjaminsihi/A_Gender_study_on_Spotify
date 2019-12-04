/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Quotes</Button>
            <Button href={docUrl('doc1.html')}>Overview</Button>
            <Button href={docUrl('doc2.html')}>Proposal</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try" >
        {[
          {
            content:
              'As long as we define social life as the sum total of conscious and deliberate individual activities, then only individual ' +
              'manifestations of personal prejudice and hostility will be seen as racist. Systemic, collective, and coordinated behavior ' +
              'disappears from sight. Collective exercises of group power relentlessly channeling rewards, resources, and opportunities from'  + 
              'one group to another will not appear to be “racist” from this perspective because they rarely announce their intention to discriminate ' +
              'against individuals. But they work to construct racial identities by giving people of different races vastly different life chances. ———— Safiya Noble',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: '\"Algorithms of Oppression\"',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light" id='noTop'>
        {[
          {
            content:
              'There is little common or stereotypical about the women who make their careers in computing' + 
              'We are from all walks of life. We are all types of people. Whatever else, we are drawn to the challenges' +
               'presented by computing, by the thrill of solving problems, by the speed, power and complexity and potential' +
               'of the machines we create and use —— Anita Borg, 1994',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: '\"Recoding Gender\"',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'I was hired as a programmer ... It was something that women were believed to be good at.' + 
              ' ———— Fran Allen, hired by IBM in 1957',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: '\"Recoding Gender\"',
          },
        ]}
      </Block>
    );

    const Quote = () => (
      <Block id="try" >
        {[
          {
            content:
              'Since the first edition of Library of Congress Subject Headings appeared 60 years ago, American and other libraries' +
              'have increasingly relied on this list as the chief authority—if not the sole basis—for subject cataloging. There can be' +
              'no quarrel about the practical necessity for such labor-saving, worry-reducing work, nor—abstractly—about its value as a ' +
              'global standardizing agent, as a means for achieving some uniformity in an area that would otherwise be chaotic. ———— Safiya Noble',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'left',
            title: '\"Algorithms of Oppression\"',
          },
        ]}
      </Block>
    );
    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className='header_cloud'>
          <img src={`${baseUrl}img/Artboard 1v-1.svg`} alt="dress cloud" />
        </div>
        <div className="mainContainer">
          <LearnHow />
          <TryOut />
          <Description />
          <Quote/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
