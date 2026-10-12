import { createAdminApiClient } from '@shopify/admin-api-client';
import { loadEnvFile } from 'node:process';
import path from 'node:path';

const envPath = path.resolve(import.meta.dirname, '.env');
loadEnvFile(envPath);

export const client = createAdminApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: process.env.SHOPIFY_API_VERSION,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});