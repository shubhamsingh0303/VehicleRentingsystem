class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    filter() {
        const queryCopy = { ...this.queryStr };
        
        //   Removing some fields for category
        const removeFields = ["page", "limit"];

        removeFields.forEach((key) => delete queryCopy[key]);

        console.log(queryCopy);

        this.query = this.query.find(queryCopy);

        return this
    }
}
module.exports = ApiFeatures;
