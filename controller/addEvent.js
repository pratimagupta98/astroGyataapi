const AdminEventList = require("../models/addEvent");
const resp = require("../helpers/apiResponse");

exports.admin_Addevent = async (req, res) => {

    const { event_list, desc, price_online, price_offline } = req.body;

    const newAdminEventList = new AdminEventList({
        event_list: event_list,
        desc: desc,
        price_online: price_online,
        price_offline: price_offline
    });


    newAdminEventList
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}



exports.get_adminevent = async (req, res) => {
    await AdminEventList.find().populate("event_list")
        .sort({ createdAt: -1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};

exports.admin_getone_event = async (req, res) => {
    await AdminEventList.findOne({ _id: req.params.id }).populate("event_list")
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.admin_edit_event = async (req, res) => {
    await AdminEventList.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        { $set: req.body },
        { new: true }
    )
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


exports.admin_dlt_event = async (req, res) => {
    await AdminEventList.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};
