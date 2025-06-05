module.exports = {
  mutation: `
    updateUploadFileByDocumentId(documentId: String!, data: UploadFileInput!): UploadFile
  `,
  resolver: {
    Mutation: {
      updateUploadFileByDocumentId: {
        description: 'Update UploadFile by documentId',
        resolver: async (_parent, { documentId, data }, { strapi }) => {
          const existingFile = await strapi.entityService.findMany('plugin::upload.file', {
            filters: { documentId },
          });

          if (!existingFile || existingFile.length === 0) {
            throw new Error('File not found');
          }

          const fileId = existingFile[0].id;

          const updated = await strapi.entityService.update('plugin::upload.file', fileId, {
            data,
          });

          return updated;
        },
      },
    },
  },
};