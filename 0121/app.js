function AppViewModel() {                                                                                                                                                                                              
	this.firstName = ko.observable('Degi');                                                                                                                                                                                       
	this.lastName = ko.observable("Kwag");                                                                                                                                                                                        
	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);
	this.capitalizeLastName = function(){
		var currentVal = this.lastName();
		this.lastName(currentVal.toUpperCase());
	};
}                                                                                                                                                                                                                      
                                                                                                                                                                                                                                       
ko.applyBindings(new AppViewModel()); 
