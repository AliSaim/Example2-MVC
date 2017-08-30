console.log("JavaScript is working");

if (jQuery) {
    // jQuery is loaded 
    console.log("yes");
} else {
    // jQuery is not loaded
    console.log("noope");
}



// Determines relative client-side path for creating smooth transitions from Test to Production servers
//var strLocationPathPartial = location.href.substring(location.href.toLowerCase().indexOf("/cms") + 1, location.href.length);
//var strLocationPath = location.protocol + "//" + location.hostname + (location.port != "" ? ":" + location.port : "") + location.pathname.toLowerCase().replace(strLocationPathPartial.toLowerCase(), "");

var CMS = (function () {
    var intSelectedCustomerID,
        strCustomerListHeaders,
        strCustomerDetailsListHeaders,

        initialize = function () {
            strCustomerListHeaders = $("#customerList").children("table").children("tbody").html();
            strCustomerDetailsListHeaders = $("#customerDetailsList").children("table").children("tbody").html();

            setupEventHandlers();

            $("#customerSearch").focus();
        },

        setupEventHandlers = function () {
            $("#customerSearch").on("keypress", function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    searchCustomers($(this).val());
                }
            });

            //$("#customerList").children("table").children("tbody").delegate("tr:not(tr:first-child)", "focus", populateCustomerDetails);
        },

        resetDetailsLists = function () {
            $("#customerDetailsList").children("table").removeClass("systemMessage")
                .children("tbody").html(strCustomerDetailsListHeaders);
        }

    searchCustomers = function (strSearchQuery) {
        resetDetailsLists();

        if (strSearchQuery.length < 3) {
            alert("are you trolling me bro?");
            $("#customerList").children("table").attr("class", "systemMessage")
                .children("tbody").html("<div>Enter 3 or more characters</div>");
        }
        else {
            console.log("thank you, i am looking for that now....");
            $("#customerList").children("table").attr("class", "systemMessage")
                .children("tbody").html("<div>Loading</div>");
        }
    };

        
                   
      
    return {
        initialize: initialize
    };
})();

$(document).ready(CMS.initialize);