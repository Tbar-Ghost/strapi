module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/upload-files/documentId/:documentId',
      handler: 'upload-file.updateByDocumentId',
      config: {
        policies: []
      }
    }
  ]
};