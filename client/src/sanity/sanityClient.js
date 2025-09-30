import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'cqfqdjv2',  // your project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
