exports.modules 
{
    class Website {
        constructor(name,mainPageURL)
        {
            this.name = name + "WebSite";
            this.pages = new [webPage];
            pages = this.setMainPage(mainPageURL)
        }
        addPage(pageName,pageurl) {
            
            this.pages = new webPage(pageName,pageurl)
        }
    }
    class webPage {
        constructor(pageName, url) {
            this.name = pageName;
            this.URL = url;
        }

    }
    class MainPage extends webPage {
        constructor(url)
        {
            super('mainPage',url);
            this.name = 'mainPage';            
        }
    }
    
};