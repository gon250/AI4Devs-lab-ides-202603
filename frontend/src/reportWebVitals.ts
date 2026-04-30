import type { ReportHandler } from 'web-vitals';

// Registra métricas de rendimiento si se proporciona una función de callback
const collectWebVitals = async (onMetricReady?: ReportHandler): Promise<void> => {
  if (onMetricReady && onMetricReady instanceof Function) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    getCLS(onMetricReady);
    getFID(onMetricReady);
    getFCP(onMetricReady);
    getLCP(onMetricReady);
    getTTFB(onMetricReady);
  }
};

export default collectWebVitals;
