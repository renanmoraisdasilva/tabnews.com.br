const isLambdaServer = !!process.env.VERCEL_ENV;

const isBuildTime = !!process.env.BUILD_TIME;

const host = process.env.NEXT_PUBLIC_WEBSERVER_HOST || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export default Object.freeze({
  host,
  isBuildTime,
  isLambdaServer,
  isProduction,
});
