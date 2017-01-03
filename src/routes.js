import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import PostList from './containers/post_list';
import PostForm from './containers/post_new';

const About = ({}) => (
  <div>This is the about page!</div>
);

const Contact = ({}) => (
  <div>This is the contact page</div>
);

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: PostList },
  childRoutes: [
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'posts/new', component: PostForm }
  ]
};

export default routes;
