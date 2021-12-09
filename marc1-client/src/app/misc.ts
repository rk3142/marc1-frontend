declare const config: any;
const BASE_URL = config['BASE_URL'];

export const APP_CONFIG = {
  requests: {
    healthCheck: {
      url: BASE_URL + '/health',
    },
    getAPIKey: {
      url: BASE_URL + '/developer/register',
    },
    saveTemplate: {
      url: BASE_URL + '/developer',
    },
    editTemplate: {
      url: BASE_URL + '/developer',
    },
    viewTemplates: {
      url: BASE_URL + '/developer/',
    },
    getTemplateData: {
      url: BASE_URL + '/developer',
    },
    saveUserData: {
      url: BASE_URL + '/user/submit_form',
    },
    getUserData: {
      url: BASE_URL + '/developer',
    },
  },
};
