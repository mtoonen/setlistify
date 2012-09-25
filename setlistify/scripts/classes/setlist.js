function Setlist (obj){
	this.initObject = obj;
	this.venue = null;
        this.country = null;
	this.artist = null;
        this.date = null;
        this.tour = null;
        this.songs = null;
	this.init = function(){
            this.country = this.initObject.venue.city.country["@name"];
            this.venue = this.initObject.venue["@name"];
            this.artist = new Artist(this.initObject.artist);
            this.date = this.initObject["@eventDate"];
            this.tour = this.initObject["@tour"];
            
            this.songs = new Array();
            var sets = this.initObject.sets.set;
            for(var i = 0 ; i < sets.length; i++){
                var set = sets[i];
                var songs = set.song;
                for(var j = 0 ; j < songs.length ; j++ ){
                    this.songs.push(songs[j]["@name"]);
                }
            }
            delete this.initObject;
	} 
	
	this.init();
}