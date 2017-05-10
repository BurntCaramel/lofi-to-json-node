const { parseElement } = require('lofi')

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.lofiToJSON = function lofiToJSON(req, res) {
  // Example input: {"message": "Hello!"}
  if (req.body.line === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).json({ errors: ['Must set line'] });
  } else {
    // Everything is okay.
    const element = parseElement(req.body.line)
    res.status(200).json(element);
  }
};

