import {
  getWebInstrumentations,
  initializeFaro,
  type Faro,
} from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'

export const faro: Faro = initializeFaro({
  url: 'https://faro-collector-prod-〇〇.grafana.net/collect/xxxxxxxxxxxxxxxxxxxx', // ← Grafana Cloud で生成された Collector URL に変更
  app: {
    name: 'grafana-faro-demo',
    version: '1.0.0',
    environment: 'development',
  },
  user: {
    id: 'user-123',
    email: 'demo@example.com',
  },
  instrumentations: [
    ...getWebInstrumentations(),
    new TracingInstrumentation(),
  ],
})