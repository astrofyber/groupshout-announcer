module.exports = [{
    name: "groupshout",
    type: "loop",
    channel: "$getVar[channel]",
    executeOnStartup: false,
    every: 60000,
    $if: "old",
    code: `
    $if[$getVar[shoutm]==$getVar[same]]
    $elseif[$getVar[shoutm]!=$getVar[same]]
    $setVar[same;$getVar[shoutm]]
    $title[New group shout!]
	$description[$getobjectproperty[shout.body]]
	$color[f47fff]
	$footer[$getobjectproperty[displayName] • github.com/callmefyber]
	$log[[-] New group shout detected! Posted by $getobjectproperty[displayName]]
        $endelseif
        $endif
$setVar[shoutm;$getobjectproperty[shout.body]]
$createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$getVar[groupid]]]
`
}]
