module.exports = {
	name: "guildMemberAdd",
	execute(guildMember) {
		guildMember.send(`๐ HELLO, WE ARE SECRET HIDEOUT | ADVERTISING 

Welcome to our server. What's this server about? 
โข We want to create a safe community for people where they are safe. Our number one priority is our members.

๐ฌ | No cooldown in general chat. Chat more and express yourself.
๐ค | So many bots and bot channels only for u to enjoy. 
๐ | Giveaways for our members. Who doesn't like a giveaway?
๐ฎ | Gamenights hosted by game night managers for our members to show their gaming skills
๐ญ | Roleplay server
๐จ | Monthly art contests. Come and show your art.
๐ | Advertising channels. Come and advertise your server.
โถ๏ธ | Promote other social media platforms of yours.
๐ | Cooperative staff members with whom u can directly interact.
๐ | Weekly polls.
๐คฃ | Memes
๐๏ธ |  Anybody can apply for staff if they meet our requirements
๐ญ |Question of the day and answers given by the owners. We really would like to answer u all.
๐ท | Media channels where u can share the pictures u want to show us
๐ค | We partner with other servers for free
๐ฏ | SAFE TO WORK SERVER
๐๏ธ | So many voice channels!!!
AND SO MANY MORE.


Come join us in our server.
โขBanner: https://imgur.com/uaFgUOI
โขInvite link: https://discord.gg/5zSr2SjXdy
`)
		.catch(e => { console.log(e) });
	},
};