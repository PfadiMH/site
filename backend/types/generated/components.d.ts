import type { Schema, Attribute } from '@strapi/strapi';

export interface PageHome extends Schema.Component {
  collectionName: 'components_page_homes';
  info: {
    displayName: 'Home';
    icon: 'book';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
    image: Attribute.Media;
  };
}

export interface PagePage extends Schema.Component {
  collectionName: 'components_page_pages';
  info: {
    displayName: 'Page';
    icon: 'expand';
    description: '';
  };
  attributes: {
    Hero: Attribute.Blocks & Attribute.Required;
    about: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.home': PageHome;
      'page.page': PagePage;
    }
  }
}
