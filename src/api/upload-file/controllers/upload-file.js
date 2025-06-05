module.exports = {
  async updateByDocumentId(ctx) {
    const { documentId } = ctx.params;
    const data = ctx.request.body;

    const entity = await strapi.entityService.findMany('plugin::upload.file', {
      filters: { documentId }
    });

    if (!entity.length) {
      return ctx.throw(404, 'File not found');
    }

    const updated = await strapi.entityService.update('plugin::upload.file', entity[0].id, {
      data
    });

    return updated;
  }
};
