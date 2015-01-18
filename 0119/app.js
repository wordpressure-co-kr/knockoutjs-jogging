function AppViewModel() {                                                                                                                                                                                              
	this.firstName = ko.observable('Degi');                                                                                                                                                                                       
	this.lastName = ko.observable("Kwag");                                                                                                                                                                                        
	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);
}                                                                                                                                                                                                                      
                                                                                                                                                                                                                                       
ko.applyBindings(new AppViewModel()); 
