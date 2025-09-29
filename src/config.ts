import type { MapType } from "./interfaces";

// Enter your credentials here
export const CLIENT_ID = "a08a5fad-995c-4987-adbf-79c985971639";
export const CLIENT_SECRET ="50edfa823ba4bea0a9e484e781987770fb15bdbd50c7414ad91527db23809b49";
export const CURRENT_MAP_TYPE: MapType = "map";
export const CODE = "MapCode/MapsetCode";

// API endpoints (do not modify)
export const SDK_AUTH_URL = "https://api.multiset.ai/v1/m2m/token";
export const QUERY_URL = "https://api.multiset.ai/v1/vps/map/query-form";
export const MAP_DETAILS_URL = "https://api.multiset.ai/v1/vps/map/";
export const FILE_DOWNLOAD_URL = "https://api.multiset.ai/v1/file";