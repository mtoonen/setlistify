function Artist (obj){
	this.initObject = obj;
	this.name = null;
	this.artistId = null;
	this.init = function(){
            this.name = this.initObject["@name"];
            this.artistId = this.initObject["@mbid"];
            delete this.initObject;
	} 
	
	this.init();
}