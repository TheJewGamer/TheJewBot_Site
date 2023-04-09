import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What Is This?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, //TODO CHANGE THIS IMAGE
    description: (
      <>
        This is the website for a discord bot TheJewBot.
      </>
    ),
  },
  {
    title: 'Why am I Here?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, //TODO CHANGE THIS IMAGE
    description: (
      <>
        I honestly I have no clue. My first guess its that you got here by using the help command. It is possible that you somehow found this website just online though, and in that case you are very confused.
      </>
    ),
  },
  {
    title: 'Where are the Commands?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, //TODO CHANGE THIS IMAGE
    description: (
      <>
        Go find them yourself good UI design died along time ago so I am not going to tell you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
