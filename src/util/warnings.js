const deprecated = (deprecatedFeature, recommendation) => {
  if (!(deprecatedFeature && recommendation)) {
    throw new Error(
      'Must supply deprecated feature description, and recommendation'
    );
  }

  if (console) {
    if (typeof jest !== 'undefined') {
      console.warn = jest.fn(); // eslint-disable-line no-console
    }

    const message = `DEPRECATED: Use of ${deprecatedFeature} is not recommended and support will be removed in a future release. ${recommendation}`;
    console.warn(message); // eslint-disable-line no-console
  }
};

export default {
  deprecated,
};
