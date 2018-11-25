//initialise bhi to karna padegi github class
const github = new Github;

//initialize a ui class
const ui = new UI;

const searchuser = document.getElementById('searchuser');//html file me searchuser id vala mil jaega jo input me dala tha

searchuser.addEventListener('keyup',(e) => {//is searchuser pe event laga diya
	const userText = e.target.value;
	if(userText!==''){
		//ab http call lagado
		github.getUser(userText)
		.then(data => {// yaha pe jo then hai ye 1 tarike se looping ka kam kar rha hai multiple calls ke liye 
			//bar bar jab me likhta hu to jo alag alag profiles search hoti hai vo is then ke multiple calls se
         if(data.profile.message==='Not Found')//jese brdt dala mene to is data se related jo profile khuli(console me) usme message tha not found
         {
           //show alert or do nothing
         }
         else
         {
         	//show the profile jo ki hum ui.js me batenge ki kese show karenge
         	ui.showProfile(data.profile);//data br tha to uske corresponding profile mili vo dalo(console me dekha tha na)
            ui.showRepos(data.repos);
        }
		})

	}
	else
	{
		//clear the profile like be se related jo ayi thi ab vo be mitane par remove ho jae
		ui.clearprofile();
	}
});