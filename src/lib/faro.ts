import { initializeFaro } from '@grafana/faro-react';

initializeFaro({
  // required: the URL of the Grafana collector
  url: 'my/collector/url',

  // required: the identification label of your application
  app: {
    name: 'my-react-app',
  },
});