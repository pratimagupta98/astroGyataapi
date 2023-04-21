const AstroTermsCondition = require("../models/astroTrmsCondition");
const resp = require("../helpers/apiResponse");

exports.astro_term_cond = async (req, res) => {
    const { desc } = req.body;

    const newAstroTermsCondition = new AstroTermsCondition({
        desc: desc,
    });

    newAstroTermsCondition
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}



exports.getAstro_term_cond = async (req, res) => {
    await AstroTermsCondition.find()
        .sort({ sortorder: 1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.getoneAstro_term_cond = async (req, res) => {
    await AstroTermsCondition.findOne({ _id: req.params.id })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.editAstro_term_cond = async (req, res) => {
    await AstroTermsCondition.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.dlt_astro_term_cond = async (req, res) => {
    await AstroTermsCondition.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};
