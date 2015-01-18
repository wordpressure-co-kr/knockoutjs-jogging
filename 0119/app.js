function AppViewModel() {                                                                                                                                                                                              
	this.firstName = ko.observable('Degi');                                                                                                                                                                                       
	this.lastName = ko.observable("Kwag");                                                                                                                                                                                        
}                                                                                                                                                                                                                      
                                                                                                                                                                                                                                       
ko.applyBindings(new AppViewModel()); 
