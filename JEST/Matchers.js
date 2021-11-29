const Matchers=
{
    returnObbject : function()
    {
        var empObj = {"id":100,"name":"Navnath","dept":"cs","designation":"full stack"}

        return empObj;
    },
    returnURL :function(){
        var strURL = "http://www.google.com";
        return strURL;
    },

    returnArrNames:function()
    {
        var arrNames=['Navnath','varun','raj','dhanashri','gyan','nikhil'];
        return arrNames;
    },
}

module.exports=Matchers;