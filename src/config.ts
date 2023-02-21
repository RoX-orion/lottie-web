export const DEBUG = import.meta.env.APP_ENV !== 'production';
export const MOBILE_SCREEN_MAX_WIDTH = 600; // px
export const MOBILE_SCREEN_LANDSCAPE_MAX_WIDTH = 950; // px
export const MOBILE_SCREEN_LANDSCAPE_MAX_HEIGHT = 450; // px


export const VIDEO_MOV_TYPE = 'video/quicktime';

export const SUPPORTED_IMAGE_CONTENT_TYPES = new Set([
    'image/png', 'image/gif', 'image/jpeg',
]);

export const SUPPORTED_VIDEO_CONTENT_TYPES = new Set([
    'video/mp4', // video/quicktime added dynamically in environment.ts
]);

export const CONTENT_TYPES_WITH_PREVIEW = new Set([
    ...SUPPORTED_IMAGE_CONTENT_TYPES,
    ...SUPPORTED_VIDEO_CONTENT_TYPES,
]);

