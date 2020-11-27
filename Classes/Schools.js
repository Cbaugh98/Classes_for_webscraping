exports.modules 
{
    class School {
        //TODO expand upon this later 
        /**
         * Constructor for a school
         * @param {String} name  School name
         * @param {String} url Main page URL
         */
        constructor(name,url) {
            setName(name);
            this.website = new Website(name, url);
            let website = new schoolSite();
        }   
    }
    
};