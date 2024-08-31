import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kolay Kullanım',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Pathfinder, basit ve sezgisel arayüzüyle herkesin kolayca kullanabileceği bir navigasyon sunar. Hızlı erişim ve çoklu dil desteği ile her kullanıcıya hitap eder.

      </>
    ),
  },
  {
    title: 'Ticarileşme',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pathfinder, turizmde özelleştirilebilir rota ve işletme önerileri sunarak, işletmeler için güçlü bir pazarlama aracı olur. Sponsorluklarla gelir sağlar.
      </>
    ),
  },
  {
    title: 'PathfinderAI',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        PathfinderAI, sürekli öğrenen ve kullanıcıya en iyi deneyimi sunmak için optimize edilmiş bir yapay zeka sistemidir. Kişiselleştirilmiş öneriler sunar ve hızlı yanıt verir.

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
