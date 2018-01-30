import News from '../models/news';

export default function () {
  News.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 =
    `Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum`;

    const content2 = content1;
    const content3 = content1;

    const content4 = `Components are the heart of React's powerful, declarative programming
      model. React Router is a collection of navigational components that compose
      declaratively with your application. Whether you want to have bookmarkable URLs for
      your web app or a composable way to navigate in React Native, React Router works
      wherever React is rendering--so take your pick!`;

    const getObject1 = new News({
      id: 0,
      title: 'Title1',
      publishDate: 'Date',
      about: 'SubTtitle1',
      content: content1,
    });

    const getObject2 = new News({
      id: 1,
      title: 'Title2',
      publishDate: 'date unknown',
      about: 'SubTtitle2',
      content: content2,
    });

    const getObject3 = new News({
      id: 2,
      title: 'Title3',
      publishDate: '27 - 11 - 2017',
      about: 'SubTtitle3',
      content: content3,
    });

    const getObject4 = new News({
      id: 3,
      title: 'Title4',
      publishDate: '11/26/2017',
      about: 'SubTtitle4',
      content: content4,
    });

    News.create([getObject1, getObject2, getObject3, getObject4], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
