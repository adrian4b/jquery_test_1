var initialData = [
    { name: "Sale_123456", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012", type: "Sale", firstClient :"Adrian", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"no"},
    { name: "HE_12345", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012",type: "Home Equity", firstClient :"Mike", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"yes" },
    { name: "Purchase_333", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012", type: "Purchase", firstClient :"Adrian", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"no" },
    { name: "MO_87877", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012", type: "Mortgage Only", firstClient :"Denise", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"no" },
    { name: "Sale_3333", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012",type: "Sale", firstClient :"Shannon", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"no" },
    { name: "Sale_3232", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012",type: "Sale", firstClient :"Adrian", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"yes" },
    { name: "HE_333", accessDate:"Nov 11, 2012", completionDate:"Nov 15, 2012", type: "Home Equity", firstClient :"Adrian", civicAddress:"123 Main Street" , outsideFirm:"Admin Firm", fintrac :"no" }
];


 
var PagedGridModel = function(items) {
    this.items = ko.observableArray(items);

 
    this.gridViewModel = new ko.simpleGrid.viewModel({
        data: this.items,
        columns: [
            { headerText: "File Matter", rowText: "name" },
            { headerText: "Acces Date", rowText: "accessDate" },
			{ headerText: "CompletionDate", rowText: "completionDate" },
            { headerText: "Type", rowText: "type" },
			{ headerText: "First Client", rowText: "firstClient" },
            { headerText: "Civic Address", rowText: "civicAddress" },
			{ headerText: "Outside Practitioners Firm", rowText: "outsideFirm" },
            { headerText: "FINTRAC", rowText: "fintrac" }
            
        ],
        pageSize: 20
    });
    
    this.menus = ['Create New File', 'EFS', 'Find', 'News', 'DocGen','Logout'];
    
    this.generatedFiles = [
		{fileName : "test1.rtf", size : "24k"},
		{fileName : "test2.rtf", size : "4k"},
		{fileName : "test3.rtf", size : "2k"}
	];
    this.downloadDocGen = function(genFiles){
    	alert(genFiles.fileName);
    	
    	var url='./docgen/'+genFiles.fileName;  
		window.open(url,'Download');
    }
    
    this.openForm=function(menu){
      if(menu == "News")
        $("#newsbox").overlay().load();
      if(menu == "DocGen")
        $("#docgenbox").overlay().load();
	  if(menu == "Create New File")
        window.open('wizard.htm','Download');
    }
};

