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

        // setMainPage(url) {
        //     if (url) {this.mainPage = url;}
        //     else {this.mainPage = 'https://www.mc3.edu/';}
        // }
        // TODO movethis
        // async getwholePage(websitePath) {
        //     const browser = await puppeteer.launch();
        //     const page = await browser.newPage();
        //     await page.goto(websitePath);
        //     const pagetxt = await page.content();
        //     browser.close();
        //     return(pagetxt);
        // }
        
        
    }
    
};