









module.exports = {
    openController(params,callback) {
        try {
            callback(params,null);
        }
        catch(e) {
            callback(e,null);
        }
    }
}