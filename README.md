# 🎉 Group Shout Announcer
🤖 Discord bot that syncs the group shout messages of a Roblox group with Discord using Roblox API.

# 📚 Packages 
```npm i aoi.js@6.1.1```
```npm i discord.js```

# ⚙️ Configuration
Go to the `index.js` file and on lines 4-5, add the `token` and `bot prefix`. \
If you're running it on repl.it, use secret variables to avoid exposing the bot token.
```
    token: "BOT TOKEN", // CHANGE YOUR BOT TOKEN
    prefix: "BOT PREFIX", //CHANGE YOUR BOT PREFIX
```

Go to the `index.js` file, and on lines 33-34, change the variables in the code, and you're ready to go.
```	
	groupid: "ID", // PASTE YOUR GROUP ID
	channel: "ID", // PASTE YOUR CHANNEL ID
```
Database folders and npm folders will appear when you run the bot for the first time with the appropriate packages I mentioned earlier.

**When you restart the bot, you may need to delete the 'var values' from the database file (/container/database/main) and simply set it to '{}' so that there are no values. If you don't do this, it may not make future shouts.**
# 📮 Post specific posts
If you want the bot to only post when a specific word is present in the group shout, then replace the code with the following `$if` statement and replace `MESSAGE` with the word you want. \
You can include multiple words by separating them with question marks (;) and the bot will look for these words. If any of them are present, it will make a post. 

```js
    $if[$getVar[shoutm]==$getVar[same]]
    	$elseif[$checkContains[$getVar[shoutm];MESSAGE]==true]
    		$title[New group shout!]
		$description[$getobjectproperty[shout.body]]
		$color[f47fff]
		$footer[$getobjectproperty[displayName] • github.com/callmefyber]
		$log[[-] New group shout detected! Posted by $getobjectproperty[displayName]]
	$endelseif
	$endif
$setVar[shoutm;$getobjectproperty[shout.body]]
$createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$getVar[groupid]]]
```
# ❤️ Credits
Each message is editable through the code, credits are not required but would be appreciated.
# 🛠️ New versions
**I haven't tested the code on newer versions of aoi.js.** \
I typically strive to stay on the latest version of aoi.js, so if v6.1 becomes unsupported, I might consider updating it if necessary.
