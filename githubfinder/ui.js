class UI
{
	constructor()
	{
		this.profile=document.getElementById('profile');//html file me jo profile id thi vo dali hai
		//basically mujhe profile mil gayi hai(uska name photo etc sb chize) ab mujhe use show karna hai
	}
	//now a method for showing the profile 
	showProfile(user)//mujhe yaha us bande ki puri github info like name photo followers blogs etc
	{
		//now me ab systematically us bande ki profile show karne vala hu
		this.profile.innerHTML= `
		<div class = "card card-body mb-3">
		<div class="row">
		<div class = "col-md-3">
        <img class = "img-fluid mb-2" src = "${user.avatar_url}">// ye jo src haina ye mera API se aega jo ki avatar_url hai 
        <a href = "${user.html_url}" target="_blank" class="btn 
        btn-primary btn-block">View profile</a>//ye profile ko liye and view pe click to new tab me khulega

		</div> 
		<div class = "col-md-9">
		//badge colour ke liye and ye primary secondary ye diff diff colours bata rahe
		<span class = "badge badge-primary"> Public repos: ${user.public_repos}</span>
		<span class = "badge badge-secondary"> Public Gists: ${user.public_gists}</span>
		<span class = "badge badge-success"> Followers: ${user.followers}</span>
		<span class = "badge badge-info"> Following: ${user.following}</span>
		<br></br>

		<ul class="list-group">
         <li class="list-group-item">Company: ${user.company}</li>
         <li class="list-group-item">website/blog: ${user.blog}</li>
         <li class="list-group-item">location: ${user.location}</li>
         <li class="list-group-item">member since: ${user.created_at}</li>


		</ul>


		</div>
		</div>  
		</div>

		<h3 class="page-heading mb-3"> Latest Repos</h3>
		<div id="repos"</div>
        `
		; 


	}
	//showing repos
	showRepos(repos)//taking the repos array
	{
      let output = '';//array ke output ko initialize karne ke liye

      repos.forEach(function(repo)//for loop taki arrayko bari bari output kara sake
      {
        output+= ` 
         <div class = "card card-body mb-2">
         <div class = "row">
         <div class = "col-md-6">
         <a href = "${repo.html_url}" target="_blank">${repo.name} </a>

         </div>

         <div class = "col-md-6">
         <span class = "badge badge-primary"> Stars: ${repo.stargazercount}</span>
		<span class = "badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
		<span class = "badge badge-success"> Forks: ${repo.forks_count}</span>

         </div>
         </div>
         </div>



        `;
      })
      //output repos
      document.getElementById('repos').innerHTML= output;//ouput jo aya hai use HTML me daldo taki vo webpage par show ho jae

	}

	clearprofile()
	{
		this.profile.innerHTML='';//clearing the profile when nothing is written
		// see ye innerHTML kyu use kiyu kiya hai coz hume chize dikhani to web page par hi hai and 
		//web page pe jo show hota hai vo HTML file vala hi to show hota hai
	}
}