'use strict';

/**
 * ourblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ourblog.ourblog');
