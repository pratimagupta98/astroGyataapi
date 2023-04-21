const express = require("express");
const router = express.Router();


const {
    astro_term_cond,
    getAstro_term_cond,
    getoneAstro_term_cond,
    editAstro_term_cond,
    dlt_astro_term_cond
} = require("../controller/astroTrmsCondition");



router.post("/admin/astro_term_cond", astro_term_cond);
router.get("/admin/getAstro_term_cond", getAstro_term_cond);
router.get("/admin/getoneAstro_term_cond/:id", getoneAstro_term_cond)
router.post("/admin/editAstro_term_cond/:id", editAstro_term_cond);
router.get("/admin/dlt_astro_term_cond/:id", dlt_astro_term_cond);


module.exports = router;

