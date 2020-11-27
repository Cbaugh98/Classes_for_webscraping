exports.modules 
{
    class School {
        //TODO expand upon this later 
        /**
         * Constructor for a school
         * @param {String} name  School name
         * @param {String} url Main page URL
         * @param {Number} guild Discord Guild id
         */
        constructor(name,url,guild) {
            setName(name);
            this.website = new Website(name, url);
            this.guild = guild;
        }   
    }
    
};