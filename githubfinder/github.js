class Github
{
	constructor()
	{
     this.client_id = 'fdc70ed2b671e6a41bce';//ye constrctr to chalega hi hence ye sab client id wagerah initialize ho jaenge
     // or in sabko hume getuser() me zarurat padegi
     this.client_secret = 'a4bdd77abc86db2849fd5178c302c6ab429cb4d';
     this.repos_count = 5;// coz 5 repos dikhani hai bas
     this.repos_sort = 'created: asc';//ascending order me sorted honi chaiye
    }
    async getUser(user){
	
	 const profileResponse = await fetch(` https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
       const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
	 const profile = await profileResponse.json();
	 const repos = await repoResponse.json();
    return{
    	profile,
    	repos
    	}//like mene likha site par b to mujhe b se related sare profile
    	//br likhunga to br se related sare mil jaenge
    	//ye chiz hum console me dekh sakte hai
    }

    //bahut imp bat ye hai ki mujhe jo profiles mil rahi hai vo unique mil rahi hai like mene br dala to br ke corresponding 1
    // hi profile show ho rahi coz mene searching userid ke basis pe ki hai and user id unique hoti hai
}