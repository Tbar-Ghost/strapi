'use strict';

/**
 * web-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-profile.web-profile');
