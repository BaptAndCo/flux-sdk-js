export default {
  required: true,
  title: 'Viewpoint',
  type: 'object',
  properties: {
    guid: {
      type: 'string',
    },
    clippingPlanes: {
      type: 'array',
      items: {
        title: 'ClippingPlane',
        type: 'object',
        properties: {
          location: {
            title: 'XYZ',
            type: 'object',
            properties: {
              x: {
                type: 'number',
              },
              y: {
                type: 'number',
              },
              z: {
                type: 'number',
              },
            },
          },
          direction: {
            title: 'XYZ',
            type: 'object',
            properties: {
              x: {
                type: 'number',
              },
              y: {
                type: 'number',
              },
              z: {
                type: 'number',
              },
            },
          },
        },
      },
    },
    perspectiveCamera: {
      title: 'PerspectiveCamera',
      type: ['object', 'null'],
      properties: {
        cameraViewPoint: {
          title: 'XYZ',
          type: 'object',
          properties: {
            x: {
              type: 'number',
            },
            y: {
              type: 'number',
            },
            z: {
              type: 'number',
            },
          },
        },
        cameraDirection: {
          title: 'XYZ',
          type: 'object',
          properties: {
            x: {
              type: 'number',
            },
            y: {
              type: 'number',
            },
            z: {
              type: 'number',
            },
          },
        },
        cameraUpVector: {
          title: 'XYZ',
          type: 'object',
          properties: {
            x: {
              type: 'number',
            },
            y: {
              type: 'number',
            },
            z: {
              type: 'number',
            },
          },
        },
        fieldOfView: {
          type: 'number',
        },
      },
    },
    orthogonalCamera: {
      title: 'OrthogonalCamera',
      type: ['object', 'null'],
      properties: {
        cameraViewPoint: {
          title: 'XYZ',
          type: 'object',
          properties: {
            x: {
              type: 'number',
            },
            y: {
              type: 'number',
            },
            z: {
              type: 'number',
            },
          },
        },
        cameraDirection: {
          title: 'XYZ',
          type: 'object',
          properties: {
            x: {
              type: 'number',
            },
            y: {
              type: 'number',
            },
            z: {
              type: 'number',
            },
          },
        },
        cameraUpVector: {
          title: 'XYZ',
          type: 'object',
          properties: {
            x: {
              type: 'number',
            },
            y: {
              type: 'number',
            },
            z: {
              type: 'number',
            },
          },
        },
        viewToWorldScale: {
          type: 'number',
        },
      },
    },
    snapshot: {
      title: 'Snapshot',
      type: ['object', 'null'],
      properties: {
        snapshotType: {
          type: 'string',
        },
        snapshotData: {
          type: 'string',
        },
      },
    },
    fluxProperties: {
      type: 'object',
    },
  },
};
