var initialData = [
    { name: "Sale_123456", type: "Sale", price: 75.95 },
    { name: "HE_12345", type: "Home Equity", price: 190.00 },
    { name: "Purchase_333", type: "Purchase", price: 25.00 },
    { name: "MO_87877", type: "Mortgage Only", price: 99.95 },
    { name: "Sale_3333", type: "Sale", price: 6350 },
    { name: "Sale_3232", type: "Sale", price: 0.35 },
    { name: "Ho_333", type: "Home Equity", price: 1.50 }
];


 
var PagedGridModel = function(items) {
    this.items = ko.observableArray(items);

 
    this.gridViewModel = new ko.simpleGrid.viewModel({
        data: this.items,
        columns: [
            { headerText: "File Matter", rowText: "name" },
            { headerText: "File Matter Type", rowText: "type" },
            { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
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
    }
};

